import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { appRouting } from './components/app.routes';
import { HombresComponent } from './components/hombres/hombres.component';
import { MujeresComponent } from './components/mujeres/mujeres.component';
import { OtrosComponent } from './components/otros/otros.component';
import { PagComponent } from './components/pag/pag.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarruselComponent,
    ProductosComponent,
    FooterComponent,
    SeleccionComponent,
    HombresComponent,
    MujeresComponent,
    OtrosComponent,
    PagComponent,
    AboutComponent,
    ContactComponent,
  
    
  ],
  imports: [
    BrowserModule,appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
