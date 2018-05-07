import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Search } from './search';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  objSearch = new Search();
  characters: Array<Object>;

  isLoading = false;

  ngOnInit() {
  }

  search() {

    this.isLoading = true;
    this.searchService.searchCharacter(this.objSearch.term)
                      .then(searchResponse => {
                        this.characters = searchResponse;
                        this.isLoading = false;
                      });
  }
}
