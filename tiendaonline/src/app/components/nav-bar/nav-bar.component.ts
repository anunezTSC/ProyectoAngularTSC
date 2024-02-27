import { Component, OnInit } from '@angular/core';
import { GetArticulosService } from 'src/app/get-articulos.service';
import { Productos } from 'src/app/interfaces/productos';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
productos: Productos[] = [];
constructor(private getArticulosService : GetArticulosService ){

}
 ngOnInit(): void {


}

}

