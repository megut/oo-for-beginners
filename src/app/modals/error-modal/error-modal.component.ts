import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent {

  public text: string;

  constructor(
    private bsModalRef: BsModalRef,
  ) {
  }

  leave() {
    this.bsModalRef.hide();
  }

}
