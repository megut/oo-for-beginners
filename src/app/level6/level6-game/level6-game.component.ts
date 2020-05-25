import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {BsModalService} from 'ngx-bootstrap';
import {ShuffleService} from '../../shared/shuffle.service';
import {Uml} from './uml';
import {AbstractLevelComponent} from '../../shared/abstract-level-component';

@Component({
  selector: 'app-level6-game',
  templateUrl: './level6-game.component.html',
  styleUrls: ['./level6-game.component.css']
})
export class Level6GameComponent extends AbstractLevelComponent implements OnInit {

  level = 6;

  umls: Array<Uml>;

  index = 0;

  wrongIndex = 0;

  wrongAnswers = false;

  complete = false;

  constructor(
    private router: Router,
    private levelService: LevelService,
    private modalService: BsModalService,
    private shuffleService: ShuffleService
  ) {
    super();
  }

  ngOnInit() {
    this.umls = Uml.initUml();
    this.shuffleService.shuffleValues(this.umls);
  }

  levelCompleted(): boolean {
    return this.complete;
  }

  checkIndex(type: String) {
    if (this.umls[this.index].type === type) {
      if (this.index < 5) {
        this.index++;
      } else {
        this.complete = true;
      }
    } else {
      this.wrongAnswers = true;
      this.wrongIndex++;
    }
  }

  repeatLevel() {
    this.index = 0;
    this.shuffleService.shuffleValues(this.umls);
    this.complete = false;
    this.wrongAnswers = false;
    this.wrongIndex = 0;
  }

  saveAndRedirect(route: string) {
    this.levelService.increaseLevel(this.level + 1);
    this.router.navigate([route]);
  }
}
