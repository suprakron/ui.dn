import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhurchaseorderComponent } from './profile/phurchaseorder/phurchaseorder.component'; 
import { FavoriteorderComponent } from './profile/favoriteorder/favoriteorder.component';
import { ProfilemyselfComponent } from './profile/profilemyself/profilemyself.component';
import { DatapersonnalComponent } from './profile/datapersonnal/datapersonnal.component';
import { AccountbankComponent } from './profile/accountbank/accountbank.component';
import { DatabusinessComponent } from './profile/databusiness/databusiness.component';
import { DataashippingComponent } from './profile/dataashipping/dataashipping.component';
import { CouponComponent } from './profile/coupon/coupon.component';
import { ForgotpasswordComponent } from './profile/forgotpassword/forgotpassword.component';
import { AlertloginComponent } from './homepage/alertlogin/alertlogin.component';
import { AlertregisterComponent } from './homepage/alertregister/alertregister.component';

 
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import { ProductallComponent } from './homepage/productall/productall.component';
import { PromotionComponent } from './homepage/promotion/promotion.component';
import { CouponmyselfComponent } from './homepage/couponmyself/couponmyself.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { CartComponent } from './homepage/cart/cart.component';
 

 

export const routes: Routes = [
    {
        path: 'homepage',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomeModule)
      },
      { path: 'signin', component: AlertloginComponent },
      { path: 'signup', component: AlertregisterComponent },
        {
          path: 'productall',
          component: ProductallComponent
        },
        {
          path: 'promotion',
          component: PromotionComponent
        },
        {
          path: 'couponmyself',
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
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      { path: 'phurchaseorder', component: PhurchaseorderComponent },
      { path: 'favoriteorder', component: FavoriteorderComponent },
      { path: 'profilemyself', component: ProfilemyselfComponent },
      { path: 'datapersonnal', component: DatapersonnalComponent },
      { path: 'accountbank', component: AccountbankComponent },
      { path: 'databusiness', component: DatabusinessComponent },
      { path: 'datashipping', component: DataashippingComponent },
      { path: 'coupon', component: CouponComponent },
      { path: 'forgot', component: ForgotpasswordComponent },

      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
  
      { path: 'productdetail', component: ProductdetailComponent },
 
    {
        path:'',
        redirectTo:'homepage',pathMatch:'full',
    },  {
        path:'**',
        redirectTo:'profile' 
    }
];


@NgModule({
    imports:[RouterModule.forRoot(routes,{
        useHash:false,anchorScrolling:'enabled',scrollPositionRestoration:'enabled'
    })],exports:[RouterModule]
})
export class AppRoutingModule{}