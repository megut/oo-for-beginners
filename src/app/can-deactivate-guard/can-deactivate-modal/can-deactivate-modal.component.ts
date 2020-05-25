import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-can-deactivate-modal',
  templateUrl: './can-deactivate-modal.component.html',
  styleUrls: ['./can-deactivate-modal.component.css']
})
export class CanDeactivateModalComponent {

  public onClose: Subject<boolean> = new Subject();

  constructor(public bsModalRef: BsModalRef) {
  }

  leave(value: boolean) {
    this.onClose.next(value);
    this.onClose.complete();
    this.bsModalRef.hide();
  }

}
