
import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './search.service';
import { Search } from './search';
import { SearchResult } from './searchResult';
import { Helpers } from '../app.helpers';
import { Event } from '../models/event';
import { Creator } from '../models/creator';
import { Series } from '../models/series';
import { Comic } from '../models/comic';
import { Character } from '../models/character';



@Component({
  selector: 'app-search-characters',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  @Input() childMessage: string;

  constructor(private searchService: SearchService) { }

  objSearch = new Search();
  objSearchResult: SearchResult;
  objSearchResultList = new Array<SearchResult>();

  characters: Array<Character>;
  comics: Array<Comic>;
  series: Array<Series>;
  event: Array<Event>;
  creators: Array<Creator>;

  isLoading = false;
  noDataProvided = false;
  spinner: string;
  showContent = false;

  tipo: string;
  typeSearch: string;

  ngOnInit() {
    this.isLoading = false;
    this.noDataProvided = false;
  }

  search() {
    this.showContent = false;
    this.spinner = Helpers.getSpinner();
    this.isLoading = true;
    this.noDataProvided = false;

    console.log(this.childMessage);
    console.log(this.typeSearch);

    this.tipo = this.childMessage;

    switch (this.typeSearch) {
      case 'characters':
      this.searchService.searchCharacter(this.objSearch.term)
                      .then(searchResponse => {
                        
                        if (searchResponse.length === 0) {
                          this.noDataProvided = true;
                        }

                        searchResponse.forEach(item => {
                          this.objSearchResult = new SearchResult();
                          this.objSearchResult.name = item.name;
                          this.objSearchResult.href = `/character/${item.id}`
                          this.objSearchResult.src = `${item.thumbnail.path}/standard_xlarge.${item.thumbnail.extension}`;
                          this.objSearchResultList.push(this.objSearchResult);                       
                        });
                        
                        this.isLoading = false;
                        this.showContent = true;
                      });
      break;
      case 'creators': 
      this.searchService.searchCreators(this.objSearch.term)
                        .then(searchResponse => {
                          
                          if (searchResponse.length === 0) {
                            this.noDataProvided = true;
                          }

                          searchResponse.forEach(item => {
                            this.objSearchResult = new SearchResult();
                            this.objSearchResult.name = `${item.firstName} ${item.lastName}` ;
                            this.objSearchResult.href = `/creator/${item.id}`
                            this.objSearchResult.src = `${item.thumbnail.path}/standard_xlarge.${item.thumbnail.extension}`;
                            this.objSearchResultList.push(this.objSearchResult);                       
                          });
                          
                          this.isLoading = false;
                          this.showContent = true;
                        });
      break;
      case 'comics': 
      this.searchService.searchComics(this.objSearch.term)
                        .then(searchResponse => {
                          
                          if (searchResponse.length === 0) {
                            this.noDataProvided = true;
                          }

                          searchResponse.forEach(item => {
                            this.objSearchResult = new SearchResult();
                            this.objSearchResult.name = item.title ;
                            this.objSearchResult.href = `/comic/${item.id}`
                            this.objSearchResult.src = `${item.thumbnail.path}/standard_xlarge.${item.thumbnail.extension}`;
                            this.objSearchResultList.push(this.objSearchResult);                       
                          });
                          
                          this.isLoading = false;
                          this.showContent = true;
                        });
      break;
      case 'events': 
      this.searchService.searchEvents(this.objSearch.term)
                        .then(searchResponse => {
                          
                          if (searchResponse.length === 0) {
                            this.noDataProvided = true;
                          }

                          searchResponse.forEach(item => {
                            this.objSearchResult = new SearchResult();
                            this.objSearchResult.name = item.title ;
                            this.objSearchResult.href = `/event/${item.id}`
                            this.objSearchResult.src = `${item.thumbnail.path}/standard_xlarge.${item.thumbnail.extension}`;
                            this.objSearchResultList.push(this.objSearchResult);                       
                          });
                          
                          this.isLoading = false;
                          this.showContent = true;
                        });
      break;      
      case 'series': 
      this.searchService.searchSeries(this.objSearch.term)
                        .then(searchResponse => {
                          
                          if (searchResponse.length === 0) {
                            this.noDataProvided = true;
                          }

                          searchResponse.forEach(item => {
                            this.objSearchResult = new SearchResult();
                            this.objSearchResult.name = item.title ;
                            this.objSearchResult.href = `/serie/${item.id}`
                            this.objSearchResult.src = `${item.thumbnail.path}/standard_xlarge.${item.thumbnail.extension}`;
                            this.objSearchResultList.push(this.objSearchResult);                       
                          });
                          
                          this.isLoading = false;
                          this.showContent = true;
                        });
      break;
      default:
      break;
    }


  }
}
