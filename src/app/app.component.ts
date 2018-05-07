import { Component, OnInit  } from '@angular/core';
import { SearchService } from './search/search.service';
import { Search } from './search/search';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

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
