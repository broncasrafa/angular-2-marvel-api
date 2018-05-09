import { Component, OnInit } from '@angular/core';
import { Creator } from '../models/creator';
import { CreatorsService } from './creators.service';


@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  creators = new Array<Creator>();

  constructor(private creatorsService: CreatorsService) { }

  ngOnInit() {

    this.creatorsService.indexCreators()
                        .then(resp => {
                          this.creators = resp;
                        });
  }

}
