import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-urinario',
  templateUrl: './sis-urinario.component.html',
  styleUrls: ['./sis-urinario.component.css']
})
export class SisUrinarioComponent implements OnInit {
titulo = 'Urinario';
cuerpo1 = ` ayuda a eliminar un producto de desecho llamado urea, que se produce como resultado de la descomposición de ciertos alimentos. Todo el sistema incluye dos riñones, dos uréteres, la vejiga, dos músculos del esfínter y la uretra. La orina producida por los riñones baja por los uréteres hasta la vejiga y sale del cuerpo a través de la uretra.`;
  constructor() { }

  ngOnInit() {
  }

}
