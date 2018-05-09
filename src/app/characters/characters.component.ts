import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from '../models/character';
import { Helpers } from '../app.helpers';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters = new Array<Character>();
  isLoading = false;
  spinner: string;

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.spinner = Helpers.getSpinner();
    this.isLoading = true;
    this.characterService.indexCharacters()
                         .then(charactersResp => {
                           this.characters = charactersResp;
                           this.isLoading = false;
                         });

  }


}
