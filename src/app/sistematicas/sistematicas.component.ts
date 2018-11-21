import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistematicas',
  templateUrl: './sistematicas.component.html',
  styleUrls: ['./sistematicas.component.css']
})
export class SistematicasComponent implements OnInit {

  titulo = 'Sistema Cuerpo Humano ';
  cuerpo1 = `Nuestros cuerpos se componen de una serie de sistemas biológicos que llevan a cabo funciones específicas y necesarias para la vida cotidiana. `;
  constructor() { }

  ngOnInit() {
  }

}
