
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors } from '../../models/errors';
import { Helpers } from '../../app.helpers';
import { StoriesService } from '../stories.service';
import { Stories } from '../../models/stories';
import { Event } from '../../models/event';
import { Comic } from '../../models/comic';
import { Character } from '../../models/character';
import { Creator } from '../../models/creator';
import { Series } from '../../models/series';


@Component({
  selector: 'app-stories-details',
  templateUrl: './stories-details.component.html',
  styleUrls: ['./stories-details.component.css']
})
export class StoriesDetailsComponent implements OnInit {
  storie = new Stories();
  spinner: string;
  isLoading = false;
  hasErrors = false;
  errors: Errors;

  someComics: Array<Comic>;
  someEvents: Array<Event>;
  someCharacters: Array<Character>;
  someCreators: Array<Creator>;
  someSeries: Array<Series>;

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.spinner = Helpers.getSpinner();

    const id = +this.route.snapshot.params['id'];

    this.storiesService
      .detailsStorie(id)
      .then(resp => {
        this.storie = resp[0];
      })
      .catch(err => {
        this.hasErrors = true;
        this.errors = JSON.parse(err._body);
      });

    this.isLoading = true;
    this.storiesService.otherDetaisStorie(id).subscribe(data => {
      this.someCreators = data[0];
      this.someCharacters = data[1];
      this.someComics = data[2];
      this.someSeries = data[3];
      this.someEvents = data[4];
      this.isLoading = false;
    });
  }
}
