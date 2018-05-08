import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Stories } from '../../models/stories';
import { Character } from '../../models/character';

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

  constructor(private charactersService: CharactersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.offset = 0;
    this.id = +this.route.snapshot.params['id'];

    this.charactersService.detailsCharacter(this.id).then(characterResponse => {
      this.character = characterResponse;
    });

    this.charactersService.charactersStories(this.id, this.offset).then(resp => {
      this.stories = resp;
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
