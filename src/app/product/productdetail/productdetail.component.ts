import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  standalone:false,
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.scss'
})
export class ProductdetailComponent {
    @ViewChild('ProblemDialog') ProblemDialog!: ElementRef<HTMLDialogElement>;
    isProductDetailActive = true;
    openproblemDialog() {
      this.ProblemDialog.nativeElement.showModal();
    }
  
    closeDialog() {
      this.ProblemDialog.nativeElement.close();
    }


    toggleTab(tab: string) {
      this.isProductDetailActive = tab === 'detail';
    }

}
