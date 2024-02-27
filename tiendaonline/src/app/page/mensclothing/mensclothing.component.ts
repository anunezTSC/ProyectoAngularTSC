import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetArticulosService } from 'src/app/get-articulos.service';


@Component({
  selector: 'app-mensclothing',
  templateUrl: './mensclothing.component.html',
  styleUrls: ['./mensclothing.component.css']
})
export class MensclothingComponent {
  listProduc:any=[];
constructor(  private getArticulosService : GetArticulosService ){

}
 ngOnInit(): void {
  
  this.getArticulosService.GetProductos(`men's clothing`).subscribe((response: any) => {
    this.listProduc=response;

})

}
}