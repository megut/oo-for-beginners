import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExtraOptions} from '@angular/router/src/router_module';
import {LevelOverviewComponent} from './level-overview/level-overview.component';
import {Level1IntroductionComponent} from './level1/level1-introduction/level1-introduction.component';
import {Level1GameComponent} from './level1/level1-game/level1-game.component';
import {CanDeactivateGuard} from './can-deactivate-guard/can-deactivate.guard';
import {Level2GameComponent} from './level2/level2-game/level2-game.component';
import {Level2IntroductionComponent} from './level2/level2-introduction/level2-introduction.component';
import {Level3IntroductionComponent} from './level3/level3-introduction/level3-introduction.component';
import {Level3GameComponent} from './level3/level3-game/level3-game.component';
import {Level4IntroductionComponent} from './level4/level4-introduction/level4-introduction.component';
import {Level4GameComponent} from './level4/level4-game/level4-game.component';
import {Level5IntroductionComponent} from './level5/level5-introduction/level5-introduction.component';
import {Level5GameComponent} from './level5/level5-game/level5-game.component';
import {Level6IntroductionComponent} from './level6/level6-introduction/level6-introduction.component';
import {Level6GameComponent} from './level6/level6-game/level6-game.component';
import {Level7IntroductionComponent} from './level7/level7-introduction/level7-introduction.component';
import {Level7GameComponent} from './level7/level7-game/level7-game.component';
import {LevelGuard} from './services/level.guard';

const routes: Routes = [
  {
    path: '',
    component: LevelOverviewComponent
  },
  {
    path: 'overview',
    component: LevelOverviewComponent,
  },
  {
    path: 'level1/introduction',
    component: Level1IntroductionComponent,
    canActivate: [LevelGuard],
    data: {level: 1}
  },
  {
    path: 'level1/game',
    component: Level1GameComponent,
    canActivate: [LevelGuard],
    canDeactivate: [CanDeactivateGuard],
    data: {level: 1}
  },
  {
    path: 'level2/introduction',
    component: Level2IntroductionComponent,
    canActivate: [LevelGuard],
    data: {level: 2}
  },
  {
    path: 'level2/game',
    component: Level2GameComponent,
    canActivate: [LevelGuard],
    canDeactivate: [CanDeactivateGuard],
    data: {level: 2}
  },
  {
    path: 'level3/introduction',
    component: Level3IntroductionComponent,
    canActivate: [LevelGuard],
    data: {level: 3}
  },
  {
    path: 'level3/game',
    component: Level3GameComponent,
    canActivate: [LevelGuard],
    canDeactivate: [CanDeactivateGuard],
    data: {level: 3}
  },
  {
    path: 'level4/introduction',
    component: Level4IntroductionComponent,
    canActivate: [LevelGuard],
    data: {level: 4}
  },
  {
    path: 'level4/game',
    component: Level4GameComponent,
    canActivate: [LevelGuard],
    canDeactivate: [CanDeactivateGuard],
    data: {level: 4}
  },
  {
    path: 'level5/introduction',
    component: Level5IntroductionComponent,
    canActivate: [LevelGuard],
    data: {level: 5}
  },
  {
    path: 'level5/game',
    component: Level5GameComponent,
    canActivate: [LevelGuard],
    canDeactivate: [CanDeactivateGuard],
    data: {level: 5}
  },
  {
    path: 'level6/introduction',
    component: Level6IntroductionComponent,
    canActivate: [LevelGuard],
    data: {level: 6}
  },
  {
    path: 'level6/game',
    component: Level6GameComponent,
    canActivate: [LevelGuard],
    canDeactivate: [CanDeactivateGuard],
    data: {level: 6}
  },
  {
    path: 'level7/introduction',
    component: Level7IntroductionComponent,
    canActivate: [LevelGuard],
    data: {level: 7}
  },
  {
    path: 'level7/game',
    component: Level7GameComponent,
    canActivate: [LevelGuard],
    canDeactivate: [CanDeactivateGuard],
    data: {level: 7}
  },
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
