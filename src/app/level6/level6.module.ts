import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level6IntroductionComponent } from './level6-introduction/level6-introduction.component';
import { RouterModule } from '@angular/router';
import { Level6GameComponent } from './level6-game/level6-game.component';

@NgModule({
  declarations: [Level6IntroductionComponent, Level6GameComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Level6Module {
}
