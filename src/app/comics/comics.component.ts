import { Component, OnInit } from '@angular/core';
import { ComicsService } from './comics.service';
import { Helpers } from '../app.helpers';
import { Comic } from '../models/comic';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics = new Array<Comic>();
  isLoading = false;
  spinner: string;

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.spinner = Helpers.getSpinner();
    this.isLoading = true;

    this.comicsService.indexComics().then(resp => {
      this.comics = resp;
      this.isLoading = false;
    });
  }

}
