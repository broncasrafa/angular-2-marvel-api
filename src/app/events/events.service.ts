import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
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
    const url = `${this.baseUrl}/events?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&limit=44`;

    return this.http
               .get(url)
               .toPromise()
               .then(resp => resp.json().data.results)
               .catch(Helpers.handleError);
  }
}
