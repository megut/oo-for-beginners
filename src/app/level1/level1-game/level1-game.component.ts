import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {BsModalService} from 'ngx-bootstrap';
import {MilestoneModalComponent} from '../../modals/milestone-modal/milestone-modal.component';
import {Datatype} from './datatype';
import {ShuffleService} from '../../shared/shuffle.service';
import {AbstractLevelComponent} from '../../shared/abstract-level-component';

@Component({
  selector: 'app-level1-guideline',
  templateUrl: './level1-game.component.html',
  styleUrls: ['./level1-game.component.css']
})
export class Level1GameComponent extends AbstractLevelComponent implements OnInit {

  constructor(
    private router: Router,
    private levelService: LevelService,
    private modalService: BsModalService,
    private shuffleService: ShuffleService
  ) {
    super();
  }

  level = 1;

  values: Array<Datatype>;

  value: Datatype = undefined;

  sortedBools: Array<Datatype> = new Array<Datatype>();
  sortedInts: Array<Datatype> = new Array<Datatype>();
  sortedTexts: Array<Datatype> = new Array<Datatype>();
  sortedDoubles: Array<Datatype> = new Array<Datatype>();

  sortedTypes = [this.sortedInts, this.sortedDoubles, this.sortedBools, this.sortedTexts];
  types = ['int', 'double', 'boolean', 'String'];

  showAlert = false;

  ngOnInit() {
    this.values = Datatype.initValues();
    this.shuffleService.shuffleValues(this.values);
  }

  valueClicked(value) {
    this.showAlert = false;
    if (this.value === value) {
      this.value = undefined;
    } else {
      this.value = value;
    }
  }

  addValueToType(index: number) {
    const type = this.types[index];
    const isIncluded = type === this.value.type;
    if (isIncluded) {
      this.copyAndDeleteItem(this.value, this.values, this.sortedTypes[index]);
      this.value = undefined;
      this.showAlert = false;
    } else {
      this.showAlert = true;
    }
  }

  levelCompleted(): boolean {
    return this.values.length === 0;
  }

  saveAndRedirect(route: string) {
    this.levelService.increaseLevel(2);
    const modalInstance = this.modalService.show(MilestoneModalComponent);
    modalInstance.content.text = 'Du hast das Thema Datentypen abgeschlossen!';
    modalInstance.content.route = route;
    modalInstance.content.level = 1;
  }
}
