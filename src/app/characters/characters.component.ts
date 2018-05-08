import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters = new Array<Character>();

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.characterService.indexCharacters()
                         .then(charactersResp => {
                           this.characters = charactersResp;
                         });

  }


}
