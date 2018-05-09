import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { marvelAppSettings } from '../app.marvel.settings';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import { Character } from '../models/character';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Helpers } from '../app.helpers';

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
                    .catch(Helpers.handleError);
  }


  detailsCharacter(id: number) {

    const url = `${this.baseUrl}/characters/${id}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results[0])
                    .catch(Helpers.handleError);
  }

  otherDetailsCharacter(id: number) {

    let credentials: string;
    credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const comicsParameters = `limit=4&format=comic&formatType=comic&startYear=2017`;

    const urlCharacterComics = `${this.baseUrl}/characters/${id}/comics?${credentials}&${comicsParameters}`;
    const urlCharacterEvents = `${this.baseUrl}/characters/${id}/events?${credentials}&limit=4`;
    const urlCharacterSeries = `${this.baseUrl}/characters/${id}/series?${credentials}&limit=4`;
    const urlCharacterStories = `${this.baseUrl}/characters/${id}/stories?${credentials}&limit=4`;

    const req1 = this.http.get(urlCharacterComics).map(res => res.json().data.results);
    const req2 = this.http.get(urlCharacterEvents).map(res => res.json().data.results);
    const req3 = this.http.get(urlCharacterSeries).map(res => res.json().data.results);
    const req4 = this.http.get(urlCharacterStories).map(res => res.json().data.results);

    return forkJoin([req1, req2, req3, req4]);

  }

  charactersComics(id: number, offset: number) {
    let credentials: string;
    credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const comicsParameters = `limit=24&offset=${offset}&format=comic&formatType=comic&orderBy=title`;
    const url = `${this.baseUrl}/characters/${id}/comics?${credentials}&${comicsParameters}`;

    return this.http.get(url)
                    .toPromise()
                    .then(resp => resp.json().data.results)
                    .catch(Helpers.handleError);
  }

  charactersEvents(id: number, offset: number) {
    let credentials: string;
    credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const eventsParameters = `limit=24&offset=${offset}&orderBy=name`;
    const url = `${this.baseUrl}/characters/${id}/events?${credentials}&${eventsParameters}`;

    return this.http.get(url)
                    .toPromise()
                    .then(resp => resp.json().data.results)
                    .catch(Helpers.handleError);
  }

  charactersSeries(id: number, offset: number) {
    let credentials: string;
    credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const seriesParameters = `limit=24&offset=${offset}&orderBy=startYear`;
    const url = `${this.baseUrl}/characters/${id}/series?${credentials}&${seriesParameters}`;

    return this.http.get(url)
                    .toPromise()
                    .then(resp => resp.json().data.results)
                    .catch(Helpers.handleError);
  }

  charactersStories(id: number, offset: number) {
    let credentials: string;
    credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const storiesParameters = `limit=24&offset=${offset}&orderBy=id`;
    const url = `${this.baseUrl}/characters/${id}/stories?${credentials}&${storiesParameters}`;

    return this.http.get(url)
                    .toPromise()
                    .then(resp => resp.json().data.results)
                    .catch(Helpers.handleError);
  }

}
