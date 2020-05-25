import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Level} from './level';
import {LevelService} from '../services/level.service';

@Component({
  selector: 'app-level-overview',
  templateUrl: './level-overview.component.html',
  styleUrls: ['./level-overview.component.css']
})
export class LevelOverviewComponent implements OnInit {

  levels: Array<Level>;

  userLevel = 0;

  constructor(
    private levelService: LevelService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.levels = Level.initLevels();
    this.userLevel = this.levelService.getLevel();
  }

  route(level: number) {
    if (level <= this.userLevel) {
      this.router.navigate(['/level' + level + '/introduction']);
    }
  }

}
