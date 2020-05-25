import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level5IntroductionComponent } from './level5-introduction/level5-introduction.component';
import { Level5GameComponent } from './level5-game/level5-game.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Level5IntroductionComponent, Level5GameComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Level5Module {
}
