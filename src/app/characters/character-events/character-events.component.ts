import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Event } from '../../models/event';
import { Character } from '../../models/character';
import { Helpers } from '../../app.helpers';

@Component({
  selector: 'app-character-events',
  templateUrl: './character-events.component.html',
  styleUrls: ['./character-events.component.css']
})
export class CharacterEventsComponent implements OnInit {

  events = new Array<Event>();
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

    this.charactersService.charactersEvents(this.id, this.offset).then(resp => {
      this.events = resp;
      this.isLoading = false;
      this.loadMore = true;
    });
  }

  loadMoreEvents(offset: number) {
    this.offset++;
    this.charactersService.charactersEvents(this.id, this.offset).then(resp => {

      resp.forEach(event => this.events.push(event));

      console.log(this.events);

      return this.events;
    });
  }

}
