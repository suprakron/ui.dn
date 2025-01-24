import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-couponmyself',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './couponmyself.component.html',
  styleUrl: './couponmyself.component.scss'
})
export class CouponmyselfComponent {

}
