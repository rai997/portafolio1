import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-integumentario',
  templateUrl: './sis-integumentario.component.html',
  styleUrls: ['./sis-integumentario.component.css']
})
export class SisIntegumentarioComponent implements OnInit {
  titulo = 'Tegumentario';
  cuerpo1 = `La piel, o el sistema tegumentario, es el órgano más grande del cuerpo. Nos protege del mundo exterior y es nuestra primera defensa contra las bacterias, virus y otros patógenos. También ayuda a regular la temperatura corporal y eliminar los residuos a través de la transpiración. Además de la piel, el sistema tegumentario incluye al cabello y las uñas.`
  constructor() { }

  ngOnInit() {
  }

}
