import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
    @ViewChild('RegisterDialog') 
    RegisterDialog!: ElementRef<HTMLDialogElement>;
    openrgDialog() {
      this.RegisterDialog.nativeElement.showModal();
    }
    closergDialog() {
      this.RegisterDialog.nativeElement.close();
    }

    @ViewChild('LoginDialog') 
    LoginDialog!: ElementRef<HTMLDialogElement>;
    openlnDialog() {
      this.LoginDialog.nativeElement.showModal();
    }
    closelnDialog() {
      this.LoginDialog.nativeElement.close();
    }
    

}
