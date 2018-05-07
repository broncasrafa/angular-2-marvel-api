import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { marvelAppSettings } from '../app.marvel.settings';

@Injectable()
export class ComicsService {

  private baseUrl = marvelAppSettings.marvel_endpoint;
  private apiKey = marvelAppSettings.marvel_apiKey;
  private ts = marvelAppSettings.marvel_teste_ts;
  private hash = marvelAppSettings.marvel_teste_hash;

  private date: Date;

  constructor(private http: Http) { }

  indexComics() {

    const dateRange = this.getDateRange();

    const credentials = `apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;

    const url = `${this.baseUrl}/comics?${credentials}&format=comic&formatType=comic&dateRange=${dateRange}&orderBy=-focDate&limit=24`;

    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results)
                    .catch(this.handleError);
  }

  detailsComics(id: number) {
    const url = `${this.baseUrl}/comics/${id}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data.results)
                    .catch(this.handleError);
  }



  private getDateRange(): string {

    this.date = new Date();

    let year: number;
    let startDate: string;
    let endDate: string;
    let dateRange: string;

    year = this.date.getFullYear();
    startDate = `${year}-01-01`;
    endDate = `${year}-12-31`;
    dateRange = `${startDate},${endDate}`;

    return dateRange;
  }

  private handleError(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }
}
