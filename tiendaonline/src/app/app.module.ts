import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ElectronicsComponent } from './page/electronics/electronics.component';
import { JeweleryComponent } from './page/jewelery/jewelery.component';
import { MensclothingComponent } from './page/mensclothing/mensclothing.component';
import { WomensclothingComponent } from './page/womensclothing/womensclothing.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { InformativoComponent } from './components/informativo/informativo.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoDetalleComponent } from './components/carrito-detalle/carrito-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ElectronicsComponent,
    JeweleryComponent,
    MensclothingComponent,
    WomensclothingComponent,
    CarruselComponent,
    InformativoComponent,
    CardsComponent,
    CarritoComponent,
    CarritoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
