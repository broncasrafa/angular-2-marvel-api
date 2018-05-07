import { Component, OnInit } from '@angular/core';
import { ComicsService } from './comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics = new Array<Object>();

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.comicsService.indexComics().then(resp => {
      this.comics = resp;
    });
  }

}
