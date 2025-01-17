import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-contact',
  imports: [FooterComponent, HeaderComponent ,GoogleMapsModule 
    
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  center = { lat: 13.7563, lng: 100.5018 };  
  zoom = 12; 
}
