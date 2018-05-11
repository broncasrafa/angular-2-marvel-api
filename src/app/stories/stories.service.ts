import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { marvelAppSettings } from '../app.marvel.settings';
import { Helpers } from '../app.helpers';


@Injectable()
export class StoriesService {

  private baseUrl = marvelAppSettings.marvel_endpoint;
  private apiKey = marvelAppSettings.marvel_apiKey;
  private ts = marvelAppSettings.marvel_teste_ts;
  private hash = marvelAppSettings.marvel_teste_hash;

  constructor(private http: Http) { }

  indexStories() {
    const url = `${this.baseUrl}/stories?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&limit=40`;

    return this.http
               .get(url)
               .toPromise()
               .then(resp => resp.json().data.results)
               .catch(Helpers.handleError);
  }

  detailsStorie(id: number) {
    const url = `${this.baseUrl}/stories/${id}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;
    return this.http
               .get(url)
               .toPromise()
               .then(resp => resp.json().data.results)
               .catch(Helpers.handleError);
  }

  otherDetaisStorie(id: number) {
    const credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const urlStorieCharacters = `${this.baseUrl}/stories/${id}/characters?${credentials}`;
    const urlStorieComics = `${this.baseUrl}/stories/${id}/comics?${credentials}`;
    const urlStorieCreators = `${this.baseUrl}/stories/${id}/creators?${credentials}`;
    const urlStorierEvents = `${this.baseUrl}/stories/${id}/events?${credentials}`;
    const urlStorieSeries = `${this.baseUrl}/stories/${id}/series?${credentials}`;

    const req1 = this.http.get(urlStorieCreators).map(res => res.json().data.results);
    const req2 = this.http.get(urlStorieCharacters).map(res => res.json().data.results);
    const req3 = this.http.get(urlStorieComics).map(res => res.json().data.results);
    const req4 = this.http.get(urlStorieSeries).map(res => res.json().data.results);
    const req5 = this.http.get(urlStorierEvents).map(res => res.json().data.results);

    return forkJoin([req1, req2, req3, req4, req5]);
  }
}
