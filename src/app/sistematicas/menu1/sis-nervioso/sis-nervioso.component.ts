import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-nervioso',
  templateUrl: './sis-nervioso.component.html',
  styleUrls: ['./sis-nervioso.component.css']
})
export class SisNerviosoComponent implements OnInit {
  titulo = 'Sistema Nervioso ';
  cuerpo1 = `controla tanto la acción voluntaria (movimientos conscientes) como las acciones involuntarias (la respiración), y envía señales a diferentes partes del cuerpo. El sistema nervioso central incluye al cerebro y la médula espinal. El sistema nervioso periférico se compone de nervios que conectan cada parte del cuerpo al sistema nervioso central. (Cerebro)`;

  constructor() { }

  ngOnInit() {
  }

}
