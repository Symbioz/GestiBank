import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-component',
  templateUrl: './toast-component.component.html',
  styleUrls: ['./toast-component.component.scss']
})
export class ToastComponentComponent implements OnInit {

   constructor(private toastService: ToastService) {}

  showSuccess() {
   let options = { closeButton: true, tapToDismiss: false,  titleClass: 'yellow' };
  this.toastService.success('Hello world!', 'Toast success!', options);
  }

  showError() {
    this.toastService.error('Warning message');
  }

  showInfo() {
    this.toastService.info('Success message');
  }

  showWarning() {
    this.toastService.warning('Error message');
  }

}
