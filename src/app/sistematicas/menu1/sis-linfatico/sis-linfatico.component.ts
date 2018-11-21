import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-linfatico',
  templateUrl: './sis-linfatico.component.html',
  styleUrls: ['./sis-linfatico.component.css']
})
export class SisLinfaticoComponent implements OnInit {
titulo= 'Linfatico';
cuerpo1 = `incluye a los ganglios linfáticos, los conductos y vasos linfáticos. También influye en la respuesta inmune del organismo. Su función principal es producir y transportar la linfa, un líquido claro que contiene células blancas de la sangre para ayudar a combatir infecciones. El sistema linfático también elimina el exceso de líquido linfático de los tejidos corporales y lo devuelve a la sangre.`;
  constructor() { }

  ngOnInit() {
  }

}
