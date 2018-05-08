import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Character } from '../../models/character';


@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {

  character = new Character();

  someComics: Array<Object>;
  someEvents: Array<Object>;
  someSeries: Array<Object>;
  someStories: Array<Object>;

  constructor(private characterService: CharactersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    const id = +this.route.snapshot.params['id'];

    this.characterService.detailsCharacter(id).then(characterResponse => {
      this.character = characterResponse;
    });

    this.characterService.otherDetailsCharacter(id).subscribe(
      data => {
        this.someComics = data[0];
        this.someEvents = data[1];
        this.someSeries = data[2];
        this.someStories = data[3];
      }
    );

  }

}
