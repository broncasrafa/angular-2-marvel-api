
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors } from '../../models/errors';
import { Helpers } from '../../app.helpers';
import { Series } from '../../models/series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  serie = new Series();
  spinners: string;
  isLoading = false;
  hasErrors = false;
  errors: Errors;

  someComics: Array<Object>;
  someEvents: Array<Object>;
  someCharacters: Array<Object>;
  someCreators: Array<Object>;
  someStories: Array<Object>;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.spinners = Helpers.getSpinner();
    this.isLoading = true;

    const id = +this.route.snapshot.params['id'];

    this.seriesService.detailsSerie(id)
                      .then(resp => {
                        console.log(resp);
                        this.serie = resp[0];
                      })
                      .catch(err => {
                        this.hasErrors = true;
                        this.errors = JSON.parse(err._body);
                      });

    this.seriesService.otherDetaisSerie(id).subscribe(
      data => {
        this.someCreators = data[0];
        this.someCharacters = data[1];
        this.someStories = data[2];
        this.someComics = data[3];
        this.someEvents = data[4];
        console.log(data);
      }
    );

  }

}
