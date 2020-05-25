import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelOverviewComponent } from './level-overview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LevelOverviewComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LevelOverviewComponent
  ]
})
export class LevelOverviewModule {
}
