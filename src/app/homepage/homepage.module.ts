import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './homepage-routing.module';


import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { BodyhomepageComponent } from './bodyhomepage/bodyhomepage.component';
 
import { CartComponent } from './cart/cart.component';
import { CartPaymentComponent } from './cart-payment/cart-payment.component';
import { ReviewcustomerComponent } from './reviewcustomer/reviewcustomer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IndexComponent } from './index/index.component';
 


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        BannerComponent,
        HeaderComponent,
        BodyhomepageComponent,
        ReviewcustomerComponent,
        AboutusComponent,
        IndexComponent,

      ]
  })
  export class HomeModule {}
  