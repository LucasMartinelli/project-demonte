import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routerConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        //data: {animation: 'Home'}
    },
    {
        path: 'quemsomos',
        component: AboutComponent,
        //data: {animation: 'Products'}
    },
    {
        path: 'produtos',
        loadChildren: './products/products.module#ProductsModule',
        //data: {animation: 'Products'}
        //loadChildren: () =>
        //import('./products/products.module').then(m => m.ProductsModule)
    },
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
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
