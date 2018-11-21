import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citogenica',
  templateUrl: './citogenica.component.html',
  styleUrls: ['./citogenica.component.css']
})
export class CitogenicaComponent implements OnInit {
  titulo = 'Info sobre Citogenica';
  
  cuerpo1 = 'datos sobre esta';
  constructor() { }

  ngOnInit() {
  }

}
