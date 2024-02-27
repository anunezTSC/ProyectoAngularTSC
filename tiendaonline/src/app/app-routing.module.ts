import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ElectronicsComponent } from './page/electronics/electronics.component';
import { JeweleryComponent } from './page/jewelery/jewelery.component';
import { MensclothingComponent } from './page/mensclothing/mensclothing.component';
import { WomensclothingComponent } from './page/womensclothing/womensclothing.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoDetalleComponent } from './components/carrito-detalle/carrito-detalle.component';

/*configuraciones de rutas*/
const routes: Routes = [

      
  { path: '', component:HomeComponent },
    
  { path: 'electronics', component:ElectronicsComponent },
    
    
    { path: 'jewelery', component:JeweleryComponent},

    { path: `men's clothing`, component:MensclothingComponent},

    { path: `women's clothing`, component:WomensclothingComponent},

    { path: 'carrito-detalle/:id', component:CarritoDetalleComponent}
    
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
