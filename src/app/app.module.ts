import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsModule } from './products/products.module';
import { FooterComponent } from './footer/footer.component';
import { WhatsappBtnComponent } from './whatsapp-btn/whatsapp-btn.component';
import { UpBtnComponent } from './up-btn/up-btn.component';
import { DirectivesModule } from './directives.module';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    WhatsappBtnComponent,
    UpBtnComponent,
  ],
  imports: [
    //BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    SwiperModule,
    CrystalLightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})

export class AppModule { }
