import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routerConfig2: Routes = [
    {
        path: '',
        component: ProductsPageComponent,
        children: [
            { 
              path: 'bolos', 
              component: BolosComponent, 
              children: [
                { path: 'pasta', component: PastaComponent },
                { path: 'naked', component: NakedComponent },
                { path: 'confeitados', component: ConfeitadosComponent },
                { path: '', redirectTo: 'pasta', pathMatch: 'prefix'}
              ]
            },
            { 
              path: 'docinhos', 
              component: DocinhosComponent,
              children: [
                { path: 'finos', component: FinosComponent },
                { path: 'infantis', component: InfantisComponent },
                { path: 'tradicionais', component: TradicionaisComponent },
                { path: '', redirectTo: 'finos', pathMatch: 'prefix'}
               ]
            },
            { 
              path: 'doces', 
              component: DocesComponent,
              children: [
                { path: 'cupcakes', component: CupcakesComponent },
                { path: 'pirulitos', component: PirulitosComponent },
                { path: 'bemcasados', component: BemcasadosComponent },
                { path: '', redirectTo: 'cupcakes', pathMatch: 'prefix'}
              ]
            },
            { path: '', redirectTo: 'bolos/pasta', pathMatch: 'full'}
        ]
    },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routerConfig2)
  ],
  exports: [
  	RouterModule
  ]
})

export class ProductsRoutingModule { }
