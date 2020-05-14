import { Component, OnInit } from '@angular/core';
import {products,departments} from "src/app/data/data";
import { ProductsInterface } from '../interfaces/ecommerce.interfaces';
import {Router} from "@angular/router";
import { from } from 'rxjs';
import { filter, map ,tap} from 'rxjs/operators';


@Component({
  selector: 'app-hombres',
  templateUrl: './hombres.component.html',
  styleUrls: ['./hombres.component.css']
})
export class HombresComponent implements OnInit {

  public productosMen:Array<ProductsInterface> = [];

  constructor(private router:Router) {

    this.GetProductos();
    
   }

  ngOnInit(): void {
  }

public GetProductos(){
let Departmento=departments.find((departamento)=> departamento.department==="El");

from(products).pipe(filter((producto)=> producto.department=== Departmento.id),
map((producto)=>{
  let direccionIMG=`../../../assets/${producto.img}`;
  return{
    ...producto,
    img:direccionIMG
  };
}),
tap((productoActualizado)=>
this.productosMen.push(productoActualizado))
).subscribe()


}
public GetIdToChangeScreen(id:number){
  this.router.navigate(["seleccion",id]);
}
}
