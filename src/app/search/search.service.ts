import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { marvelAppSettings } from '../app.marvel.settings';
import { Helpers } from '../app.helpers';

@Injectable()
export class SearchService {

  private baseUrl = marvelAppSettings.marvel_endpoint;
  private apiKey = marvelAppSettings.marvel_apiKey;
  private ts = marvelAppSettings.marvel_teste_ts;
  private hash = marvelAppSettings.marvel_teste_hash;

  constructor(private http: Http) {}

  searchCharacter(name: string) {
    const url = `${this.baseUrl}/characters?nameStartsWith=${name}&apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results)
                    .catch(Helpers.handleError);
  }

  searchComics(name: string) {
    const url = `${this.baseUrl}/comics?titleStartsWith=${name}&apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results)
                    .catch(Helpers.handleError);
  }

  searchCreators(name: string) {
    const url = `${this.baseUrl}/creators?nameStartsWith=${name}&apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results)
                    .catch(Helpers.handleError);
  }

  searchSeries(name: string) {
    const url = `${this.baseUrl}/series?titleStartsWith=${name}&apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results)
                    .catch(Helpers.handleError);
  }

  searchEvents(name: string) {
    const url = `${this.baseUrl}/events?nameStartsWith=${name}&apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results)
                    .catch(Helpers.handleError);
  }

}
