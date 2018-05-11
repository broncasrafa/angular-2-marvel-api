import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors } from '../../models/errors';
import { Helpers } from '../../app.helpers';
import { CreatorsService } from '../creators.service';
import { Creator } from '../../models/creator';
import { Comic } from '../../models/comic';
import { Event } from '../../models/event';
import { Series } from '../../models/series';
import { Stories } from '../../models/stories';

@Component({
  selector: 'app-creators-details',
  templateUrl: './creators-details.component.html',
  styleUrls: ['./creators-details.component.css']
})
export class CreatorsDetailsComponent implements OnInit {

  creator = new Creator();
  spinner: string;
  isLoading = false;
  hasErrors = false;
  errors: Errors;
  someComics: Array<Comic>;
  someEvents: Array<Event>;
  someSeries: Array<Series>;
  someStories: Array<Stories>;
  imageVariants: string;

  constructor(private creatorsService: CreatorsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.spinner = Helpers.getSpinner();

    const id = +this.route.snapshot.params['id'];

    this.creatorsService
      .detailsCreators(id)
      .then(resp => {
        this.imageVariants = 'portrait_uncanny';
        this.creator = resp[0];
      })
      .catch(err => {
        this.hasErrors = true;
        this.errors = JSON.parse(err._body);
      });

      this.isLoading = true;
      this.creatorsService.otherDetailsCreator(id).subscribe(
        data => {
          this.someComics = data[0];
          this.someSeries = data[1];
          this.someEvents = data[2];
          this.someStories = data[3];

          this.isLoading = false;
        }
      );
  }

}
