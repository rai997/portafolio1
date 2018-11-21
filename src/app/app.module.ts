import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { CitogenicaComponent } from './citogenica/citogenica.component';
import { CentralComponent } from './central/central.component';
import { MenuComponent } from './citogenica/menu/menu.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { SistematicasComponent } from './sistematicas/sistematicas.component';
import { Menu1Component } from './sistematicas/menu1/menu1.component';
import { TemarioComponent } from './temario/temario.component';
import { Temario2Component } from './temario/temario2/temario2.component';
import { Temario3Component } from './temario/temario3/temario3.component';
import { Temario4Component } from './temario/temario4/temario4.component';
import { SisCirculatorioComponent } from './sistematicas/menu1/sis-circulatorio/sis-circulatorio.component';
import { SisLinfaticoComponent } from './sistematicas/menu1/sis-linfatico/sis-linfatico.component';
import { SisMuscularComponent } from './sistematicas/menu1/sis-muscular/sis-muscular.component';
import { SisIntegumentarioComponent } from './sistematicas/menu1/sis-integumentario/sis-integumentario.component';
import { InfoComponent } from './sistematicas/menu1/info/info.component';
import { SisNerviosoComponent } from './sistematicas/menu1/sis-nervioso/sis-nervioso.component';
import { SisDigestivoComponent } from './sistematicas/menu1/sis-digestivo/sis-digestivo.component';
import { SisEndocrinoComponent } from './sistematicas/menu1/sis-endocrino/sis-endocrino.component';
import { SisInmunologicoComponent } from './sistematicas/menu1/sis-inmunologico/sis-inmunologico.component';
import { SisReproductorComponent } from './sistematicas/menu1/sis-reproductor/sis-reproductor.component';
import { SisEsqueleticoComponent } from './sistematicas/menu1/sis-esqueletico/sis-esqueletico.component';
import { SisRespiratorioComponent } from './sistematicas/menu1/sis-respiratorio/sis-respiratorio.component';
import { SisUrinarioComponent } from './sistematicas/menu1/sis-urinario/sis-urinario.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
const RutasHijas : Routes = [
  {path:'Sistematica/Nervioso', component: SisNerviosoComponent},
  {path:'Sistematica/Tegumentario',component: SisIntegumentarioComponent},
  {path:'Sistematica/Digestivo', component: SisDigestivoComponent},
  {path:'Sistematica/Endocrino',component: SisEndocrinoComponent},
  {path:'Sistematica/Inmunologico', component: SisInmunologicoComponent},
  {path:'Sistematica/Circulatorio', component: SisCirculatorioComponent},
  {path:'Sistematica/Linfatico', component: SisLinfaticoComponent},
  {path:'Sistematica/Muscular', component: SisMuscularComponent},
  {path:'Sistematica/Reproductor', component: SisReproductorComponent},
  {path:'Sistematica/Esqueletico', component: SisEsqueleticoComponent},
  {path:'Sistematica/Respiratorio', component: SisRespiratorioComponent},
  {path:'Sistematica/Urinario', component: SisUrinarioComponent},

 

]


const appRoutes : Routes = [
  { path : '' ,  component : InicioComponent},
  {path : 'inicio', redirectTo: '' , pathMatch: 'full'},
  {path : 'Citogenica',component : CitogenicaComponent},
  {path: 'Sistematica', component  : SistematicasComponent},
  

]


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeadComponent,
    FooterComponent,
    CitogenicaComponent,
    CentralComponent,
    MenuComponent,
    CarruselComponent,
    SistematicasComponent,
    Menu1Component,
    TemarioComponent,
    Temario2Component,
    Temario3Component,
    Temario4Component,
    SisCirculatorioComponent,
    SisLinfaticoComponent,
    SisMuscularComponent,
    SisIntegumentarioComponent,
    InfoComponent,
    SisNerviosoComponent,
    SisDigestivoComponent,
    SisEndocrinoComponent,
    SisInmunologicoComponent,
    SisReproductorComponent,
    SisEsqueleticoComponent,
    SisRespiratorioComponent,
    SisUrinarioComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule.forChild(RutasHijas),
    NgScrollbarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
