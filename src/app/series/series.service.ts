import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { marvelAppSettings } from '../app.marvel.settings';
import { Helpers } from '../app.helpers';

@Injectable()
export class SeriesService {

  private baseUrl = marvelAppSettings.marvel_endpoint;
  private apiKey = marvelAppSettings.marvel_apiKey;
  private ts = marvelAppSettings.marvel_teste_ts;
  private hash = marvelAppSettings.marvel_teste_hash;

  constructor(private http: Http) { }

  indexSeries() {
    const url = `${this.baseUrl}/series?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&limit=44`;

    return this.http
               .get(url)
               .toPromise()
               .then(resp => resp.json().data.results)
               .catch(Helpers.handleError);
  }

  detailsSerie(id: number) {
    const url = `${this.baseUrl}/series/${id}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;
    return this.http
               .get(url)
               .toPromise()
               .then(resp => resp.json().data.results)
               .catch(Helpers.handleError);
  }

  otherDetaisSerie(id: number) {
    const credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const urlSerieComics = `${this.baseUrl}/series/${id}/comics?${credentials}`;
    const urlSerierEvents = `${this.baseUrl}/series/${id}/events?${credentials}`;
    const urlSerieCharacters = `${this.baseUrl}/series/${id}/characters?${credentials}`;
    const urlSerieStories = `${this.baseUrl}/series/${id}/stories?${credentials}`;
    const urlSerieCreators = `${this.baseUrl}/series/${id}/creators?${credentials}`;

    const req1 = this.http.get(urlSerieCreators).map(res => res.json().data.results);
    const req2 = this.http.get(urlSerieCharacters).map(res => res.json().data.results);
    const req3 = this.http.get(urlSerieStories).map(res => res.json().data.results);
    const req4 = this.http.get(urlSerieComics).map(res => res.json().data.results);
    const req5 = this.http.get(urlSerierEvents).map(res => res.json().data.results);

    return forkJoin([req1, req2, req3, req4, req5]);
  }
}
