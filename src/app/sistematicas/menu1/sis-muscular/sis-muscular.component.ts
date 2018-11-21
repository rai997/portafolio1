import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-muscular',
  templateUrl: './sis-muscular.component.html',
  styleUrls: ['./sis-muscular.component.css']
})
export class SisMuscularComponent implements OnInit {
  titulo = 'Muscular';
  cuerpo1 = 'se compone de aproximadamente 650 músculos que ayudan en el movimiento, el flujo de sangre y otras funciones corporales. Existen tres tipos de músculo: el músculo esquelético que está conectado al hueso y ayuda con el movimiento voluntario, el músculo liso que se encuentra en el interior de los órganos y ayuda a mover sustancias a través de los órganos, y el músculo cardiaco que se encuentra en el corazón y ayuda a bombear la sangre.';
  constructor() { }

  ngOnInit() {
  }

}
