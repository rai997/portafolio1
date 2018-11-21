import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  titulo = 'Inicio';
  cuerpo = 'Portafolio creado con Angular por Angelo Jorquera y Cesar Lara'
  constructor() { }

  ngOnInit() {
  }

}
