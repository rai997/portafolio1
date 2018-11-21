import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-inmunologico',
  templateUrl: './sis-inmunologico.component.html',
  styleUrls: ['./sis-inmunologico.component.css']
})
export class SisInmunologicoComponent implements OnInit {
titulo = 'Inmunologico';
cuerpo1 = `Es la defensa que tiene nuestro organismo para combatir bacterias, virus y otros patógenos perjudiciales. Incluye a los ganglios linfáticos, el bazo, la médula ósea, los linfocitos (incluyendo las células B y células T), el timo y los leucocitos. Estos últimos son las células blancas de la sangre.`;
  constructor() { }

  ngOnInit() {
  }

}
