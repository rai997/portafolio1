import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-reproductor',
  templateUrl: './sis-reproductor.component.html',
  styleUrls: ['./sis-reproductor.component.css']
})
export class SisReproductorComponent implements OnInit {
titulo = 'Reproductor';
cuerpo1= `interviene en la reproducción de la especie humana. El sistema reproductor masculino incluye al pene y los testículos, que producen los espermatozoides. El sistema reproductor femenino se compone de la vagina, el útero y los ovarios, que producen óvulos. Durante la concepción, un espermatozoide se fusiona con un óvulo, dando lugar a un óvulo fecundado que se implanta y crece en el útero.`
  constructor() { }

  ngOnInit() {
  }

}
