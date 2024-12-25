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


@NgModule({
     declarations: [
    ProfilemyselfComponent,
    FavoriteorderComponent,
    PhurchaseorderComponent,
    DatapersonnalComponent,
    AccountbankComponent,
    DataashippingComponent,
    CouponComponent
  ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
      ]
  })
  export class ProfileModule {}
  