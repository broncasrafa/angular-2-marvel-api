import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Stories } from '../../models/stories';
import { Character } from '../../models/character';
import { Helpers } from '../../app.helpers';

@Component({
  selector: 'app-character-stories',
  templateUrl: './character-stories.component.html',
  styleUrls: ['./character-stories.component.css']
})

export class CharacterStoriesComponent implements OnInit {

  stories = new Array<Stories>();
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

    this.charactersService.charactersStories(this.id, this.offset).then(resp => {
      this.stories = resp;
      this.isLoading = false;
      this.loadMore = true;
    });
  }

  loadMoreStories(offset: number) {
    this.offset++;
    this.charactersService.charactersStories(this.id, this.offset).then(resp => {

      resp.forEach(storie => this.stories.push(storie));

      console.log(this.stories);

      return this.stories;
    });
  }

}
