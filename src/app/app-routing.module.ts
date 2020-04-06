import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sobre',
        component: AboutComponent
    },
    {
        path: 'produtos',
        loadChildren: () =>
        import('./products/products.module').then(m => m.ProductsModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routerConfig)
  ],
  exports: [
  	RouterModule
  ]
})

export class AppRoutingModule { }
