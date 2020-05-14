import {RouterModule,Routes} from "@angular/router";
import { SeleccionComponent } from './seleccion/seleccion.component';
import { HombresComponent } from './hombres/hombres.component';
import { HomeComponent } from './home/home.component';
import { MujeresComponent } from './mujeres/mujeres.component';
import { OtrosComponent } from './otros/otros.component';


const router:Routes =[
    {path:"",component:HomeComponent},
    {path:"seleccion",component:SeleccionComponent},
    {path:"hombres",component:HombresComponent},
    {path:"mujeres",component:MujeresComponent},
    {path:"otros",component:OtrosComponent}



];

export const appRouting = RouterModule.forRoot(router);
