import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetArticulosService } from 'src/app/get-articulos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
mycart$ = this.getArticulosService.mycart$;
constructor( private getArticulosService : GetArticulosService){

}


 ngOnInit(): void {
  

 }

 TotalProducto(precio: number, unidades : number ){
  return precio * unidades

 }

 EliminarProducto(id: string){
  this.getArticulosService.EliminarProducto(id)

 }

 ActualizarUnidades(operacion : string, id : string ){
  const productos = this.getArticulosService.EncontrarIdProducto(id)
  if(productos){
    if(operacion === 'restar' && productos.cantidad > 0){
        productos.cantidad = productos.cantidad -1
    }
    if(operacion === 'sumar'){
      productos.cantidad = productos.cantidad +1
    }
    if(productos.cantidad ===0){
      this.EliminarProducto(id);
    }

  }
 }

 TotalCarrito(){
  const resultado = this.getArticulosService.TotalCarrito();
  return resultado;
 }
 Subtotal(){
  const subtotal = this.getArticulosService.Subtotal();
  return subtotal;
 }
  iva(){
  const iva = this.getArticulosService.Iva();
  return iva;
 }

 

}






