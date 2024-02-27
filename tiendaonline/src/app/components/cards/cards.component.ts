import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetArticulosService } from 'src/app/get-articulos.service';
import { Productos } from 'src/app/interfaces/productos';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {
@Input() Productos: any = []
mycart$ = this.getArticulosService.mycart$;
  constructor(private getArticulosService: GetArticulosService){

  }
  ngOnit(): void {

  }

 addtocart(productos : Productos){
   return this.getArticulosService.addProduct(productos)
 }
 EncontrarId(id: string){
  const idProducto = this.getArticulosService.EncontrarIdProducto(id)
  console.log(id)
  return idProducto;
}
}
