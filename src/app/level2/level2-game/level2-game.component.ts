import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {MilestoneModalComponent} from '../../modals/milestone-modal/milestone-modal.component';
import {BsModalService} from 'ngx-bootstrap';
import {ShuffleService} from '../../shared/shuffle.service';
import {AbstractLevelComponent} from '../../shared/abstract-level-component';

@Component({
  selector: 'app-level2-game',
  templateUrl: './level2-game.component.html',
  styleUrls: ['./level2-game.component.css']
})
export class Level2GameComponent implements OnInit, AbstractLevelComponent {

  level = 2;

  ints: Array<number | undefined> = [2, 4, 1234, 3456];
  texts: Array<string | undefined> = ['Welt', 'Hallo', 'Array'];
  doubles: Array<number | undefined> = [6.78, 10.75];
  values = [];

  value: Object = undefined;

  sortedInts: Array<number | undefined> = new Array<number>();
  sortedTexts: Array<string | undefined> = new Array<string>();
  sortedDoubles: Array<number | undefined> = new Array<number>();

  sortedTypes = [];
  types = [this.ints, this.doubles, this.texts];

  showAlert = false;
  showIndexAlert = false;

  constructor(
    private router: Router,
    private levelService: LevelService,
    private modalService: BsModalService,
    private shuffleService: ShuffleService
  ) {
  }

  ngOnInit() {
    this.sortedInts = [undefined, undefined, undefined, undefined];
    this.sortedTexts = [undefined, undefined, undefined];
    this.sortedDoubles = [undefined, undefined];
    this.sortedTypes = [{name: 'int', array: this.sortedInts}, {name: 'double', array: this.sortedDoubles},
      {name: 'String', array: this.sortedTexts}];
    this.values = this.values.concat(this.ints);
    this.values = this.values.concat(this.texts);
    this.values = this.values.concat(this.doubles);
    this.shuffleService.shuffleValues(this.values);
  }

  valueClicked(value) {
    this.showAlert = false;
    this.showIndexAlert = false;
    if (this.value === value) {
      this.value = undefined;
    } else {
      this.value = value;
    }
  }

  addToType(typeIndex: number, index: number) {
    this.showIndexAlert = false;
    if (this.copyAndDeleteItem(index, this.types[typeIndex], this.sortedTypes[typeIndex].array)) {
      this.value = undefined;
      this.showAlert = false;
    }
  }

  levelCompleted(): boolean {
    return this.values.length === 0;
  }

  saveAndRedirect(route: string) {
    this.levelService.increaseLevel(3);
    const modalInstance = this.modalService.show(MilestoneModalComponent);
    modalInstance.content.text = 'Du hast das Thema Arrays abgeschlossen!';
    modalInstance.content.route = route;
    modalInstance.content.level = 2;
  }

  copyAndDeleteItem(item: any, unsorted: Array<any>, sorted: Array<any>) {
    const isIncluded = unsorted.includes(this.value);
    if (isIncluded) {
      if (sorted[item] !== undefined) {
        this.showIndexAlert = true;
        return;
      }
      sorted[item] = this.value;
      this.values.splice(this.values.indexOf(this.value), 1);
    } else {
      this.showAlert = true;
    }
    return isIncluded;
  }
}
