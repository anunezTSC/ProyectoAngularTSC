import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetArticulosService } from 'src/app/get-articulos.service';


@Component({
  selector: 'app-womensclothing',
  templateUrl: './womensclothing.component.html',
  styleUrls: ['./womensclothing.component.css']
})
export class WomensclothingComponent {
  listProduc:any=[];
constructor(  private getArticulosService : GetArticulosService ){

}
 ngOnInit(): void {
  this.getArticulosService.GetProductos(`women's clothing`).subscribe((response: any) => {
    this.listProduc=response;
})

 }

}
