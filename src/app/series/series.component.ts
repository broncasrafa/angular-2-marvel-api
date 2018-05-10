import { Component, OnInit } from '@angular/core';
import { Series } from '../models/series';
import { SeriesService } from './series.service';
import { Helpers } from '../app.helpers';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series = new Array<Series>();
  spinner: string;
  isLoading = false;

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {

    this.spinner = Helpers.getSpinner();
    this.isLoading = true;

    this.seriesService.indexSeries().then(resp => {
      this.series = resp;
      this.isLoading = false;
    });
  }

}
