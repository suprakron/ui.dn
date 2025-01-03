import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './homepage-routing.module';


import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { BodyhomepageComponent } from './bodyhomepage/bodyhomepage.component';
import { AlertregisterComponent } from './alertregister/alertregister.component';
import { AlertloginComponent } from './alertlogin/alertlogin.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        BannerComponent,
        HeaderComponent,
        BodyhomepageComponent,
        AlertregisterComponent,
        AlertloginComponent
      ]
  })
  export class HomeModule {}
  