import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-cart-payment',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './cart-payment.component.html',
  styleUrl: './cart-payment.component.scss'
})
export class CartPaymentComponent {
    @ViewChild('cartDialog') cartDialog!: ElementRef<HTMLDialogElement>;
  
    openDialog() {
      this.cartDialog.nativeElement.showModal();
    }
  
    closeDialog() {
      this.cartDialog.nativeElement.close();
    }

}
