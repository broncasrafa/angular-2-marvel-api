import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Comic } from '../../models/comic';
import { Character } from '../../models/character';


@Component({
  selector: 'app-character-comics',
  templateUrl: './character-comics.component.html',
  styleUrls: ['./character-comics.component.css']
})
export class CharacterComicsComponent implements OnInit {

  comics = new Array<Comic>();
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

    this.charactersService.charactersComics(this.id, this.offset).then(resp => {
      this.comics = resp;
    });
  }

  loadMoreComics(offset: number) {
    this.offset++;
    this.charactersService.charactersComics(this.id, this.offset).then(resp => {

      resp.forEach(comic => this.comics.push(comic));

      console.log(this.comics);

      return this.comics;
    });
  }

}
