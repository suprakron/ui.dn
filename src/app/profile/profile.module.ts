import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';


import { FavoriteorderComponent } from './favoriteorder/favoriteorder.component';
import { PhurchaseorderComponent } from './phurchaseorder/phurchaseorder.component';
import { ProfilemyselfComponent } from './profilemyself/profilemyself.component';
import { DatapersonnalComponent } from './datapersonnal/datapersonnal.component';
import { AccountbankComponent } from './accountbank/accountbank.component';
import { DataashippingComponent } from './dataashipping/dataashipping.component';
import { CouponComponent } from './coupon/coupon.component';
import { HeaderComponent } from "../homepage/header/header.component";
import { FooterComponent } from "../homepage/footer/footer.component";
import { DatabusinessComponent } from './databusiness/databusiness.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
     declarations: [
    ProfilemyselfComponent,
    FavoriteorderComponent,
    PhurchaseorderComponent,
    DatapersonnalComponent,
    AccountbankComponent,
    DataashippingComponent,
    CouponComponent,
    DatabusinessComponent,
    ForgotpasswordComponent,
  ],
    imports: [
    CommonModule,
    ProfileRoutingModule,
    HeaderComponent,
    FooterComponent
]
  })
  export class ProfileModule {}
  