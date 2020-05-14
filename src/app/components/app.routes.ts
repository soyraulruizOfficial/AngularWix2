import {RouterModule,Routes} from "@angular/router";
import { SeleccionComponent } from './seleccion/seleccion.component';
import { HombresComponent } from './hombres/hombres.component';
import { HomeComponent } from './home/home.component';
import { MujeresComponent } from './mujeres/mujeres.component';
import { OtrosComponent } from './otros/otros.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const router:Routes =[
    {path:"",component:HomeComponent},
    {path:"seleccion/:id",component:SeleccionComponent},
    {path:"hombres",component:HombresComponent},
    {path:"mujeres",component:MujeresComponent},
    {path:"otros",component:OtrosComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent}



];

export const appRouting = RouterModule.forRoot(router);
