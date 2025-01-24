import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-productall',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './productall.component.html',
  styleUrl: './productall.component.scss'
})
export class ProductallComponent {

}
