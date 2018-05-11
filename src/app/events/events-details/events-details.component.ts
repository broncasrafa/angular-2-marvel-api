import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors } from '../../models/errors';
import { Helpers } from '../../app.helpers';
import { EventsService } from '../events.service';
import { Event } from '../../models/event';
import { Stories } from '../../models/stories';
import { Comic } from '../../models/comic';
import { Character } from '../../models/character';
import { Creator } from '../../models/creator';
import { Series } from '../../models/series';


@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  event = new Event();
  spinner: string;
  isLoading = false;
  hasErrors = false;
  imageVariants: string;
  errors: Errors;
  someComics: Array<Comic>;
  someStories: Array<Stories>;
  someCharacters: Array<Character>;
  someCreators: Array<Creator>;
  someSeries: Array<Series>;

  constructor(private eventsService: EventsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.spinner = Helpers.getSpinner();

    const id = +this.route.snapshot.params['id'];

    this.eventsService
      .detailsEvent(id)
      .then(resp => {
        this.imageVariants = 'portrait_incredible';
        this.event = resp[0];
      })
      .catch(err => {
        this.hasErrors = true;
        this.errors = JSON.parse(err._body);
      });

      this.isLoading = true;
      this.eventsService.otherDetailsEvent(id).subscribe(
        data => {
          this.someCreators = data[0];
          this.someCharacters = data[1];
          this.someComics = data[2];
          this.someSeries = data[3];
          this.someStories = data[4];

          this.isLoading = false;
        }
      );
  }

}
