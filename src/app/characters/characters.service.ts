import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { marvelAppSettings } from '../app.marvel.settings';

@Injectable()
export class CharactersService {

  private baseUrl = marvelAppSettings.marvel_endpoint;
  private apiKey = marvelAppSettings.marvel_apiKey;
  private ts = marvelAppSettings.marvel_teste_ts;
  private hash = marvelAppSettings.marvel_teste_hash;

  constructor(private http: Http) { }

  detailsCharacter(id: number) {

    const url = `${this.baseUrl}/characters/${id}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results[0])
                    .catch(this.handleError);
  }

  private handleError(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }
}
