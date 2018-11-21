import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-endocrino',
  templateUrl: './sis-endocrino.component.html',
  styleUrls: ['./sis-endocrino.component.css']
})
export class SisEndocrinoComponent implements OnInit {
titulo = 'Endocrino';
cuerpo1= `está formado por ocho de las principales glándulas que secretan hormonas en la sangre. Estas hormonas, a su vez, viajan a diferentes tejidos y regulan varias funciones corporales, tales como el metabolismo, el crecimiento y la función sexual.`;
  constructor() { }

  ngOnInit() {
  }

}
