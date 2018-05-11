import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { marvelAppSettings } from '../app.marvel.settings';
import { Helpers } from '../app.helpers';

@Injectable()
export class EventsService {

  private baseUrl = marvelAppSettings.marvel_endpoint;
  private apiKey = marvelAppSettings.marvel_apiKey;
  private ts = marvelAppSettings.marvel_teste_ts;
  private hash = marvelAppSettings.marvel_teste_hash;

  constructor(private http: Http) { }

  indexEvents() {
    const url = `${this.baseUrl}/events?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&limit=24`;

    return this.http
               .get(url)
               .toPromise()
               .then(resp => resp.json().data.results)
               .catch(Helpers.handleError);
  }

  detailsEvent(id: number) {
    const url = `${this.baseUrl}/events/${id}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;
    return this.http
              .get(url)
              .toPromise()
              .then(resp => resp.json().data.results)
              .catch(Helpers.handleError);
  }

  otherDetailsEvent(id: number) {
    const credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const urlEventCharacters = `${this.baseUrl}/events/${id}/characters?${credentials}`;
    const urlEventComics = `${this.baseUrl}/events/${id}/comics?${credentials}`;
    const urlEventCreators = `${this.baseUrl}/events/${id}/creators?${credentials}`;
    const urlEventSeries = `${this.baseUrl}/events/${id}/series?${credentials}`;
    const urlEventStories = `${this.baseUrl}/events/${id}/stories?${credentials}`;

    const req1 = this.http.get(urlEventCreators).map(res => res.json().data.results);
    const req2 = this.http.get(urlEventCharacters).map(res => res.json().data.results);
    const req3 = this.http.get(urlEventComics).map(res => res.json().data.results);
    const req4 = this.http.get(urlEventSeries).map(res => res.json().data.results);
    const req5 = this.http.get(urlEventStories).map(res => res.json().data.results);

    return forkJoin([req1, req2, req3, req4, req5]);
  }
}
