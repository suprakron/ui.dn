import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { BodyhomepageComponent } from './bodyhomepage/bodyhomepage.component';
import { AlertloginComponent } from './alertlogin/alertlogin.component';
import { AlertregisterComponent } from './alertregister/alertregister.component';
import { ProductallComponent } from './productall/productall.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CouponmyselfComponent } from './couponmyself/couponmyself.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';


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
    path: 'signin',
    component: AlertloginComponent
  },
  {
    path: 'signup',
    component: AlertregisterComponent
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



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
