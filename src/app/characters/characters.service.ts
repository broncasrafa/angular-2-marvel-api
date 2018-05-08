import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { marvelAppSettings } from '../app.marvel.settings';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { Character } from '../models/character';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';




@Injectable()
export class CharactersService {

  private baseUrl = marvelAppSettings.marvel_endpoint;
  private apiKey = marvelAppSettings.marvel_apiKey;
  private ts = marvelAppSettings.marvel_teste_ts;
  private hash = marvelAppSettings.marvel_teste_hash;

  constructor(private http: Http) { }


  indexCharacters() {
    const url = '../../assets/data/api/top_heroes.json';
    const urlVillains = '../../assets/data/api/top_villains.json';
    const urlWomen = '../../assets/data/api/top_women.json';
    const urlTitanicTeams = '../../assets/data/api/top_titanic_teams.json';
    const urlIndex = '../../assets/data/api/characters_index.json';

    return this.http.get(urlIndex)
                    .toPromise()
                    .then(response => response.json().data.results)
                    .catch(this.handleError);
  }


  detailsCharacter(id: number) {

    const url = `${this.baseUrl}/characters/${id}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results[0])
                    .catch(this.handleError);
  }

  otherDetailsCharacter(id: number) {

    const urlCharacterComics = `${this.baseUrl}/characters/${id}/comics?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&limit=4`;
    const urlCharacterEvents = `${this.baseUrl}/characters/${id}/events?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&limit=4`;
    const urlCharacterSeries = `${this.baseUrl}/characters/${id}/series?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&limit=4`;
    const urlCharacterStories = `${this.baseUrl}/characters/${id}/stories?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&limit=4`;

    const req1 = this.http.get(urlCharacterComics).map(res => res.json().data.results);
    const req2 = this.http.get(urlCharacterEvents).map(res => res.json().data.results);
    const req3 = this.http.get(urlCharacterSeries).map(res => res.json().data.results);
    const req4 = this.http.get(urlCharacterStories).map(res => res.json().data.results);

    return forkJoin([req1, req2, req3, req4]);

  }

  private handleError(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }
}
