import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
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
