import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { BodyhomepageComponent } from './bodyhomepage/bodyhomepage.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [    
    CommonModule,
    
    BannerComponent,
    HeaderComponent,
    BodyhomepageComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {

}
