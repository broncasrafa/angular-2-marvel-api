import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsService } from '../comics.service';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit {

  comic: Comic;

  constructor(private comicsService: ComicsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.comic = new Comic();

    const id = +this.route.snapshot.params['id'];

    this.comicsService.detailsComics(id).then(resp => {
      this.comic = resp;
    });
  }

}
