import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-esqueletico',
  templateUrl: './sis-esqueletico.component.html',
  styleUrls: ['./sis-esqueletico.component.css']
})
export class SisEsqueleticoComponent implements OnInit {
titulo = 'Esqueletico';
cuerpo1 = `consta de 206 huesos conectados por tendones, ligamentos y cartílago, es el soporte de nuestro cuerpo. El esqueleto no sólo nos ayuda a movernos, sino que también está involucrado en la producción de células sanguíneas y en el almacenamiento de calcio. Los dientes son parte del sistema esquelético, pero no se consideran huesos.`;
  constructor() { }

  ngOnInit() {
  }

}
