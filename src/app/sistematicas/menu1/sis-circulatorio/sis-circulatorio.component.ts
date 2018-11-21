import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-circulatorio',
  templateUrl: './sis-circulatorio.component.html',
  styleUrls: ['./sis-circulatorio.component.css']
})
export class SisCirculatorioComponent implements OnInit {
titulo = 'Circulatorio';
cuerpo1 = `se encarga de mover la sangre, los nutrientes, el oxígeno, dióxido de carbono y hormonas alrededor del cuerpo. Los órganos que lo componen son el corazón, la sangre, los vasos sanguíneos, las arterias y venas.`;
  constructor() { }

  ngOnInit() {
  }

}
