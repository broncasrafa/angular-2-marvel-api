import { Component, OnInit } from '@angular/core';
import { StoriesService } from './stories.service';
import { Stories } from '../models/stories';
import { Helpers } from '../app.helpers';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories = new Array<Stories>();
  isLoading = false;
  spinner: string;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {

    this.spinner = Helpers.getSpinner();
    this.isLoading = true;

    this.storiesService.indexStories()
                       .then(resp => {
                         this.stories = resp;
                         this.isLoading = false;
                       });
  }

}
