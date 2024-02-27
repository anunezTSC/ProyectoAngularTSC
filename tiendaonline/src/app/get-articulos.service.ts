import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Productos } from './interfaces/productos';


@Injectable({
  providedIn: 'root'
})
export class GetArticulosService {
  private urlArticulosApi = 'https://fakestoreapi.com/'
  private mylist: Productos[] = [];
  private mycart = new BehaviorSubject<Productos[]>([]);
  mycart$ = this.mycart.asObservable();

  constructor(private http: HttpClient ) { }

  GetProductos(categoria: string): Observable<Productos[]> {
    return this.http.get<Productos[]>(`https://fakestoreapi.com/products/category/${categoria}`);
  }

  GetDetalleProducto(idProducto: BigInteger) {
    return this.http.get(`https://fakestoreapi.com/products/${idProducto}`);
  }

  addProduct(productos: Productos) {
    if (this.mylist.length === 0) { //--- si el producto no existe se añade
      productos.cantidad = 1;
      this.mylist.push(productos);
      this.mycart.next(this.mylist)
         // console.log(productos)-----------------------imprime en consola la lista de productos enviados por medio del card
    } else {    //verificar si el producto existe
      const productosMod = this.mylist.find((element) => {
        return element.id === productos.id

      }) 

      if (productosMod) {  //si existe se añade uno a la cantidad existente
        productosMod.cantidad = productosMod.cantidad + 1;
        this.mycart.next(this.mylist)

      } else { //si no existe se añade
        productos.cantidad = 1;
        this.mylist.push(productos);
        this.mycart.next(this.mylist)
      }
    }
 

  }

  EliminarProducto(id : string){ 
    this.mylist = this.mylist.filter((productos)=>{ //retorna todos los id que sean distintos al seleccionado
      return productos.id != id;
    })
    this.mycart.next(this.mylist)
  
  }

  EncontrarIdProducto(id : string){
    return this.mylist.find((element)=>{
      console.log(element)
      return element.id === id
      
    })

  }


  TotalCarrito(){
    const total = this.mylist.reduce(function(acc, productos){
      return acc + (productos.cantidad * productos.price);
    }, 0)
      return total.toFixed(2);
  }

  Subtotal(){
    const total = this.mylist.reduce(function(acc, productos){
      return acc + (productos.cantidad * productos.price);
    }, 0)
    
    const residuo = (total * 0.15)/100
    const subtotal = total - residuo;
    return subtotal.toFixed(2);

  } 

  Iva(){
    const total = this.mylist.reduce(function(acc, productos){
      return acc + (productos.cantidad * productos.price);
    }, 0)
    
    const residuo = (total * 0.15)
    return residuo.toFixed(2)

  }


  

}




