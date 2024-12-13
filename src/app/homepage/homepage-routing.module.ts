import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { BodyhomepageComponent } from './bodyhomepage/bodyhomepage.component';
 

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
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
