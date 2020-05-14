import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/components/interfaces/ecommerce.interfaces';
import {products, departments} from "src/app/data/data"
import { from, Observable } from 'rxjs';
import { filter, map ,tap,take, pluck, switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {
  public mostrar = false;
  public producto:ProductsInterface;
  
  constructor(private AR :ActivatedRoute) { 
    this.AR.params.pipe(

      pluck("id"),
      switchMap(id=>this.GetProducts(id))
    ).subscribe((valor)=> (this.producto=valor)
    )
  };

  ngOnInit(): void {
  }
  
  public GetProducts(id:number){
    
  return    from (products)
      .pipe(
        filter((producto)=> producto.id == id),
        
        map((producto) =>({
            ...producto,
            img:`./../../../../assets/${producto.img}`,
        })));
}

}