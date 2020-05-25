import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level1IntroductionComponent } from './level1-introduction/level1-introduction.component';
import { Level1GameComponent } from './level1-game/level1-game.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Level1IntroductionComponent, Level1GameComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [Level1IntroductionComponent]
})
export class Level1Module {
}
