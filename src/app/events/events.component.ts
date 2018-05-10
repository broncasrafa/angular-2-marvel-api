import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from './events.service';
import { Helpers } from '../app.helpers';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = new Array<Event>();
  isLoading = false;
  spinner: string;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.spinner = Helpers.getSpinner();
    this.isLoading = true;

    this.eventsService.indexEvents().then(resp => {
      this.events = resp;
      this.isLoading = false;
    });
  }

}
