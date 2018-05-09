import { Helpers } from '../app.helpers';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-teste-typescript',
  templateUrl: './teste-typescript.component.html',
  styleUrls: ['./teste-typescript.component.css']
})
export class TesteTypescriptComponent implements OnInit {

  resultado: string;


  constructor() { }

  ngOnInit() {
    // const max = new Date().getFullYear();
    // const min = 1970;
    // const random = Math.floor(Math.random() * (max - min + 1) + min);
    // this.resultado = random;

    const spinners = [];

    console.log(Helpers.getSpinner());
    this.resultado = Helpers.getSpinner();

  }



}
/*
Math.floor(Math.random() * 6) + 1
Where:

1 is the start number
6 is the number of possible results (1 + start (6) - end (1))
*/
