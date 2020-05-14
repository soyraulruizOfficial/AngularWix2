import { Component, OnInit } from '@angular/core';
import {products,departments} from "src/app/data/data";
import { ProductsInterface } from '../interfaces/ecommerce.interfaces';
import {Router} from "@angular/router";
import { from } from 'rxjs';
import { filter, map ,tap} from 'rxjs/operators';
@Component({
  selector: 'app-mujeres',
  templateUrl: './mujeres.component.html',
  styleUrls: ['./mujeres.component.css']
})
export class MujeresComponent implements OnInit {

  public productosWoman:Array<ProductsInterface> = [];

  constructor(private router:Router) {

    this.GetProductos();
    
   }

  ngOnInit(): void {
  }

public GetProductos(){
let Departmento=departments.find((departamento)=> departamento.department==="Ella");

from(products).pipe(filter((producto)=> producto.department=== Departmento.id),
map((producto)=>{
  let direccionIMG=`../../../assets/${producto.img}`;
  return{
    ...producto,
    img:direccionIMG
  };
}),
tap((productoActualizado)=>
this.productosWoman.push(productoActualizado))
).subscribe()


}
public GetIdToChangeScreen(id:number){
  this.router.navigate(["seleccion",id]);
}
}
