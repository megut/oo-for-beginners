import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level4IntroductionComponent } from './level4-introduction/level4-introduction.component';
import { Level4GameComponent } from './level4-game/level4-game.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Level4IntroductionComponent, Level4GameComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class Level4Module {
}
