import { Component, Input, OnInit } from '@angular/core';
import { GetArticulosService } from 'src/app/get-articulos.service';

@Component({
  selector: 'app-carrito-detalle',
  templateUrl: './carrito-detalle.component.html',
  styleUrls: ['./carrito-detalle.component.css']
})
export class CarritoDetalleComponent implements OnInit {
  @Input() Productos: any = []
  mycart$ = this.getArticuloService.mycart$;

  constructor( private getArticuloService : GetArticulosService){

  }
  ngOnInit(): void {
    
  }
  


  EncontrarId(id: string){
    const idProducto = this.getArticuloService.EncontrarIdProducto(id)
   
    return idProducto;
  }
}
