import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@NgModule({
     declarations: [
        ProductdetailComponent,
  
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
      ]
  })
  export class ProductModule {}
  