import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-index',
  imports: [HeaderComponent, FooterComponent ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
