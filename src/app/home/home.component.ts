import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-search-characters [childMessage]='parentMessage'></app-search-characters>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  parentMessage = 'characters';

  constructor() { }
}
