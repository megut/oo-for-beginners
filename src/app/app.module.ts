import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LevelOverviewModule} from './level-overview/level-overview.module';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {Level1Module} from './level1/level1.module';
import {CanDeactivateModalComponent} from './can-deactivate-guard/can-deactivate-modal/can-deactivate-modal.component';
import {CanDeactivateGuardModule} from './can-deactivate-guard/can-deactivate-guard.module';
import {Level2Module} from './level2/level2.module';
import {Level3Module} from './level3/level3.module';
import {Level4Module} from './level4/level4.module';
import {Level5Module} from './level5/level5.module';
import {Level6Module} from './level6/level6.module';
import {Level7Module} from './level7/level7.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MilestoneModalComponent} from './modals/milestone-modal/milestone-modal.component';
import {ModalsModule} from './modals/modals.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieLawModule} from 'angular2-cookie-law';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CookieLawModule,
    LevelOverviewModule,
    AppRoutingModule,
    Level1Module,
    Level2Module,
    Level3Module,
    Level4Module,
    Level5Module,
    Level6Module,
    Level7Module,
    ModalsModule,
    CanDeactivateGuardModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [
    CanDeactivateModalComponent,
    MilestoneModalComponent
  ]
})
export class AppModule {
}
