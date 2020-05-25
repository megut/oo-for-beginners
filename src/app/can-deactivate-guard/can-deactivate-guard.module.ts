import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanDeactivateModalComponent } from './can-deactivate-modal/can-deactivate-modal.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [CanDeactivateModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class CanDeactivateGuardModule {
}
