
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors } from '../../models/errors';
import { Helpers } from '../../app.helpers';
import { SeriesService } from '../series.service';
import { Series } from '../../models/series';
import { Character } from '../../models/character';
import { Event } from '../../models/event';
import { Stories } from '../../models/stories';
import { Comic } from '../../models/comic';
import { Creator } from '../../models/creator';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  serie = new Series();
  spinner: string;
  isLoading = false;
  hasErrors = false;
  imageVariants: string;
  errors: Errors;

  someComics: Array<Comic>;
  someEvents: Array<Event>;
  someCharacters: Array<Character>;
  someCreators: Array<Creator>;
  someStories: Array<Stories>;

  constructor(private seriesService: SeriesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.spinner = Helpers.getSpinner();

    const id = +this.route.snapshot.params['id'];

    this.seriesService.detailsSerie(id)
                      .then(resp => {
                        this.imageVariants = 'portrait_incredible';
                        this.serie = resp[0];
                      })
                      .catch(err => {
                        this.hasErrors = true;
                        this.errors = JSON.parse(err._body);
                      });

    this.isLoading = true;
    this.seriesService.otherDetaisSerie(id).subscribe(
      data => {
        this.someCreators = data[0];
        this.someCharacters = data[1];
        this.someStories = data[2];
        this.someComics = data[3];
        this.someEvents = data[4];
        this.isLoading = false;
      }
    );

  }

}
