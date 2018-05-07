import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from './characters.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {

  character = new Character();

  constructor(private characterService: CharactersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    const id = +this.route.snapshot.params['id'];

    this.characterService.detailsCharacter(id).then(characterResponse => {
      this.character = characterResponse;
    });
  }

}
