import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-milestone-modal',
  templateUrl: './milestone-modal.component.html',
  styleUrls: ['./milestone-modal.component.css']
})
export class MilestoneModalComponent {

  public text: string;
  public route: string;
  public level: number;

  constructor(
    private bsModalRef: BsModalRef,
    private router: Router
  ) {
  }

  leave() {
    this.router.navigate([this.route]);
    this.bsModalRef.hide();
  }

}
