import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegendComponent } from './legend/legend.component';
import { HttpXhrService } from './http-xhr.service';

@NgModule({
  declarations: [LegendComponent],
  imports: [
    CommonModule
  ],
  providers: [
    HttpXhrService
  ],
  exports: [
    LegendComponent
  ]
})
export class SharedModule {
}
