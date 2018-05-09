import { Component, OnInit } from '@angular/core';
import { Series } from '../models/series';
import { SeriesService } from './series.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series = new Array<Series>();

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {

    this.seriesService.indexSeries().then(resp => {
      this.series = resp;
    });
  }

}
