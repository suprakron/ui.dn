import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
 

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @ViewChild('cartDialog') cartDialog!: ElementRef<HTMLDialogElement>;

  openDialog() {
    this.cartDialog.nativeElement.showModal();
  }

  closeDialog() {
    this.cartDialog.nativeElement.close();
  }
}
