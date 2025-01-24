import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { BodyhomepageComponent } from './bodyhomepage/bodyhomepage.component';

import { ProductallComponent } from './productall/productall.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CouponmyselfComponent } from './couponmyself/couponmyself.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CartPaymentComponent } from './cart-payment/cart-payment.component';
import { ReviewcustomerComponent } from './reviewcustomer/reviewcustomer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IndexComponent } from './index/index.component';
 


const routes: Routes = [
  {
    path: '',
    component: BodyhomepageComponent
  },
  {
    path: 'banner',
    component: BannerComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },

  {
    path: 'productall',
    component: ProductallComponent
  },
  {
    path: 'promotion',
    component: PromotionComponent
  },
  {
    path: 'coupon',
    component: CouponmyselfComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'cart_payment',
    component: CartPaymentComponent
  },
  {
    path: 'review',
    component: ReviewcustomerComponent
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
