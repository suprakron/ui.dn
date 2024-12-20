import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilemyselfComponent } from './profilemyself/profilemyself.component';
import { FavoriteorderComponent } from './favoriteorder/favoriteorder.component';
import { PhurchaseorderComponent } from './phurchaseorder/phurchaseorder.component';
import { AccountbankComponent } from './accountbank/accountbank.component';
import { DatabusinessComponent } from './databusiness/databusiness.component';
import { DataashippingComponent } from './dataashipping/dataashipping.component';
 

const routes: Routes = [
{
  path: '',
        component: ProfilemyselfComponent  
  },
  {
    path: 'favoriteorder',
    component: FavoriteorderComponent
  },
  {
    path: 'phurchaseorder',
    component: PhurchaseorderComponent
  },

  {
    path: 'accountbank',
    component: AccountbankComponent
  },
  {
    path: 'databusiness',
    component: DatabusinessComponent
  },
  {
    path: 'dataashipping',
    component: DataashippingComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }