import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetArticulosService } from 'src/app/get-articulos.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit{
  listProduc:any=[];
constructor(  private getArticulosService : GetArticulosService ){

}
 ngOnInit(): void {
  this.getArticulosService.GetProductos("electronics").subscribe((response: any) => {
    this.listProduc=response;
  })
   //console.log (this.route) --sirve para mostrar el snapshot para ver el path de las ruta
}


}

