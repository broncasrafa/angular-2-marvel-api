import { Component, OnInit } from '@angular/core';
import { Creator } from '../models/creator';
import { CreatorsService } from './creators.service';
import { Helpers } from '../app.helpers';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  creators = new Array<Creator>();
  isLoading = false;
  spinner: string;

  constructor(private creatorsService: CreatorsService) { }

  ngOnInit() {

    this.spinner = Helpers.getSpinner();
    this.isLoading = true;

    this.creatorsService.indexCreators()
                        .then(resp => {
                          this.creators = resp;
                          this.isLoading = false;
                        });
  }

}
