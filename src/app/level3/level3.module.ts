import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level3IntroductionComponent } from './level3-introduction/level3-introduction.component';
import { Level3GameComponent } from './level3-game/level3-game.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Level3IntroductionComponent, Level3GameComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class Level3Module {
}
