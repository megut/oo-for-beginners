import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Level2IntroductionComponent} from './level2-introduction/level2-introduction.component';
import {Level2GameComponent} from './level2-game/level2-game.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [Level2IntroductionComponent, Level2GameComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Level2Module {
}
