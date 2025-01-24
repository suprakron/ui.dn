import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FooterComponent } from "../homepage/footer/footer.component";
import { HeaderComponent } from "../homepage/header/header.component";

@NgModule({
     declarations: [
        ProductdetailComponent,
  
  ],
    imports: [
    CommonModule,
    ProductRoutingModule,
    FooterComponent,
    HeaderComponent
]
  })
  export class ProductModule {}
  