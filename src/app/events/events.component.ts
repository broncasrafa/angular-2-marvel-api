import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = new Array<Event>();

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.indexEvents().then(resp => {
      this.events = resp;
    });
  }

}
