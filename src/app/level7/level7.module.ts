import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Level7IntroductionComponent } from './level7-introduction/level7-introduction.component';
import { Level7GameComponent } from './level7-game/level7-game.component';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [Level7IntroductionComponent, Level7GameComponent],
  imports: [
    CommonModule,
    RouterModule,
    ColorPickerModule
    ]
})
export class Level7Module {
}
