import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ReviewcustomerComponent } from '../reviewcustomer/reviewcustomer.component';
import { AboutusComponent } from "../aboutus/aboutus.component";

@Component({
  selector: 'app-bodyhomepage',
 
  templateUrl: './bodyhomepage.component.html',
  styleUrl: './bodyhomepage.component.scss',
  imports: [BannerComponent, HeaderComponent, FooterComponent, ReviewcustomerComponent, AboutusComponent]
})
export class BodyhomepageComponent {

}
