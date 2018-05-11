import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { marvelAppSettings } from '../app.marvel.settings';
import { Helpers } from '../app.helpers';

@Injectable()
export class CreatorsService {

  private baseUrl = marvelAppSettings.marvel_endpoint;
  private apiKey = marvelAppSettings.marvel_apiKey;
  private ts = marvelAppSettings.marvel_teste_ts;
  private hash = marvelAppSettings.marvel_teste_hash;

  constructor(private http: Http) { }

  indexCreators() {
    const url = `${this.baseUrl}/creators?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&limit=44`;

    return this.http
               .get(url)
               .toPromise()
               .then(resp => resp.json().data.results)
               .catch(Helpers.handleError);
  }

  detailsCreators(id: number) {
    const url = `${this.baseUrl}/creators/${id}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    return this.http
               .get(url)
               .toPromise()
               .then(resp => resp.json().data.results)
               .catch(Helpers.handleError);
  }

  otherDetailsCreator(id: number) {
    const credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const urlCreatorComics = `${this.baseUrl}/creators/${id}/comics?${credentials}`;
    const urlCreatorEvents = `${this.baseUrl}/creators/${id}/events?${credentials}`;
    const urlCreatorSeries = `${this.baseUrl}/creators/${id}/series?${credentials}`;
    const urlCreatorStories = `${this.baseUrl}/creators/${id}/stories?${credentials}`;

    const req1 = this.http.get(urlCreatorComics).map(res => res.json().data.results);
    const req2 = this.http.get(urlCreatorSeries).map(res => res.json().data.results);
    const req3 = this.http.get(urlCreatorEvents).map(res => res.json().data.results);
    const req4 = this.http.get(urlCreatorStories).map(res => res.json().data.results);

    return forkJoin([req1, req2, req3, req4]);
  }

}
