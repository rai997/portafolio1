import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-respiratorio',
  templateUrl: './sis-respiratorio.component.html',
  styleUrls: ['./sis-respiratorio.component.css']
})
export class SisRespiratorioComponent implements OnInit {
titulo = 'Respiratorio';
cuerpo1= `nos permite tomar el oxígeno vital y expulsar el dióxido de carbono en el proceso que llamamos respiración. Se compone principalmente de la tráquea, el diafragma y los pulmones.`;
  constructor() { }

  ngOnInit() {
  }

}
