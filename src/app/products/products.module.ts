import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { DirectivesModule } from '../directives.module';

import { ProductsPageComponent } from './products-page/products-page.component';
import { BolosComponent } from './bolos/bolos.component';
import { DocinhosComponent } from './docinhos/docinhos.component';
import { DocesComponent } from './doces/doces.component';
import { PastaComponent } from './bolos/pasta/pasta.component';
import { NakedComponent } from './bolos/naked/naked.component';
import { ConfeitadosComponent } from './bolos/confeitados/confeitados.component';
import { FinosComponent } from './docinhos/finos/finos.component';
import { InfantisComponent } from './docinhos/infantis/infantis.component';
import { TradicionaisComponent } from './docinhos/tradicionais/tradicionais.component';
import { CupcakesComponent } from './doces/cupcakes/cupcakes.component';
import { PirulitosComponent } from './doces/pirulitos/pirulitos.component';
import { BemcasadosComponent } from './doces/bemcasados/bemcasados.component';


@NgModule({
  declarations: [
  	ProductsPageComponent,
  	BolosComponent, 
  	DocinhosComponent, 
  	DocesComponent, PastaComponent, NakedComponent, ConfeitadosComponent, FinosComponent, InfantisComponent, TradicionaisComponent, CupcakesComponent, PirulitosComponent, BemcasadosComponent,
    ],
  imports: [
    CommonModule,
    DirectivesModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
