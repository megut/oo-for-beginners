import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestoneModalComponent } from './milestone-modal/milestone-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
  declarations: [MilestoneModalComponent, ErrorModalComponent],
  imports: [
    CommonModule
  ],
})
export class ModalsModule {
}
