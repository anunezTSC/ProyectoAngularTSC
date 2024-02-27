import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetArticulosService } from 'src/app/get-articulos.service';


@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent {

  listProduc:any=[];
constructor(  private getArticulosService : GetArticulosService ){

}
 ngOnInit(): void {
  this.getArticulosService.GetProductos("jewelery").subscribe((response: any) => {
    this.listProduc=response;
   //console.log (this.route) --sirve para mostrar el snapshot para ver el path de las rutas




 });
}
}

