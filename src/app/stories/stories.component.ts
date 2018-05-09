import { Component, OnInit } from '@angular/core';
import { StoriesService } from './stories.service';
import { Stories } from '../models/stories';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories = new Array<Stories>();

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {

    this.storiesService.indexStories()
                       .then(resp => {
                         this.stories = resp;
                       });
  }

}
