import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Series } from '../../models/series';
import { Character } from '../../models/character';
import { Helpers } from '../../app.helpers';

@Component({
  selector: 'app-character-series',
  templateUrl: './character-series.component.html',
  styleUrls: ['./character-series.component.css']
})
export class CharacterSeriesComponent implements OnInit {

  series = new Array<Series>();
  character = new Character();
  offset: number;
  id: number;
  isLoading = false;
  spinner: string;
  loadMore = false;

  constructor(private charactersService: CharactersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.offset = 0;
    this.id = +this.route.snapshot.params['id'];

    this.spinner = Helpers.getSpinner();
    this.isLoading = true;

    this.charactersService.detailsCharacter(this.id).then(characterResponse => {
      this.character = characterResponse;
    });

    this.charactersService.charactersSeries(this.id, this.offset).then(resp => {
      this.series = resp;
      this.isLoading = false;
      this.loadMore = true;
    });
  }

  loadMoreSeries(offset: number) {
    this.offset++;
    this.charactersService.charactersSeries(this.id, this.offset).then(resp => {

      resp.forEach(serie => this.series.push(serie));

      console.log(this.series);

      return this.series;
    });
  }

}
