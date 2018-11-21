import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-digestivo',
  templateUrl: './sis-digestivo.component.html',
  styleUrls: ['./sis-digestivo.component.css']
})
export class SisDigestivoComponent implements OnInit {
  titulo = 'Digestivo';
  cuerpo1 = `está formado por una serie de órganos conectados, que en conjunto permiten que el cuerpo descomponga y absorba los alimentos, así como eliminar los desechos. Los órganos que lo componen son la boca, el esófago, el estómago, los intestinos delgado y grueso, el recto y el ano. El hígado y el páncreas también contribuyen al funcionamiento de este sistema, ya que producen los jugos digestivos.`;
  constructor() { }

  ngOnInit() {
  }

}
