import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title: string;
  title2: string;
  private date: Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
    this.title = `${ this.date.getFullYear() } - Data provided by `;
    this.title2 = 'Marvel API';
  }

}
