import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { BodyhomepageComponent } from './bodyhomepage/bodyhomepage.component';
import { AlertloginComponent } from './alertlogin/alertlogin.component';
import { AlertregisterComponent } from './alertregister/alertregister.component';


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




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
