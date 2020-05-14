import { Component, OnInit } from '@angular/core';
import {products,departments} from "src/app/data/data";
import { ProductsInterface } from '../interfaces/ecommerce.interfaces';
import {Router} from "@angular/router";
import { from } from 'rxjs';
import { filter, map ,tap,take} from 'rxjs/operators';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productosOtros:Array<ProductsInterface> = [];

  constructor(private router:Router) {

    this.GetProductos();
    
   }

  ngOnInit(): void {
  }

public GetProductos(){
let Departmento=departments.find((departamento)=> departamento.department==="otros");

from(products).pipe(filter((producto)=> producto.department=== Departmento.id),
map((producto)=>{
  let direccionIMG=`../../../assets/${producto.img}`;
  return{
    ...producto,
    img:direccionIMG
  };
}),take(4),
tap((productoActualizado)=>
this.productosOtros.push(productoActualizado))
).subscribe()


}
public GetIdToChangeScreen(id:number){
  this.router.navigate(["seleccion",id]);
}
}