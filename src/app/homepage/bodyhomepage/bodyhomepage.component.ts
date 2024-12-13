import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-bodyhomepage',
 
  templateUrl: './bodyhomepage.component.html',
  styleUrl: './bodyhomepage.component.scss',
  imports: [BannerComponent, HeaderComponent]
})
export class BodyhomepageComponent {

}
