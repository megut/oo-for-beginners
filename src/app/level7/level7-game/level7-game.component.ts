import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {MilestoneModalComponent} from '../../modals/milestone-modal/milestone-modal.component';
import {BsModalService} from 'ngx-bootstrap';
import {AttributeForClass} from './attribute-for-class';
import {ShuffleService} from '../../shared/shuffle.service';
import {Struct} from '../../shared/struct';
import {AbstractLevelComponent} from '../../shared/abstract-level-component';

@Component({
  selector: 'app-level7-game',
  templateUrl: './level7-game.component.html',
  styleUrls: ['./level7-game.component.css']
})
export class Level7GameComponent implements OnInit, AbstractLevelComponent {

  level = 7;

  attributes: Array<AttributeForClass>;

  structs: Array<Struct> = new Array<Struct>();
  struct: undefined | Struct;

  showAlert = false;
  orderedStructs = [];

  constructor(
    private router: Router,
    private levelService: LevelService,
    private modalService: BsModalService,
    private shuffleService: ShuffleService
  ) {
  }

  ngOnInit() {
    this.attributes = AttributeForClass.initAttributes();
    this.structs = Struct.initStructsLevel7();
    this.structs.forEach(struct => {
      const newStruct = new Struct();
      newStruct.order = struct.order;
      newStruct.type = struct.type;
      this.orderedStructs.push(newStruct);
    });
    this.shuffleService.shuffleValues(this.structs);
  }

  levelCompleted(): boolean {
    return this.structs.length === 0;
  }

  structClicked(item: Struct) {
    this.struct = item;
  }

  orderedStructClicked(index: number) {
    if (this.struct && index === this.struct.order) {
      this.copyAndDeleteItem(index, this.structs, this.orderedStructs);
    } else if ((index === 1 || index === 2) &&
      (this.struct.order === 1 || this.struct.order === 2)) {
      this.copyAndDeleteItem(index, this.structs, this.orderedStructs);
    } else {
      this.showAlert = true;
    }
  }

  copyAndDeleteItem(item: any, unsorted: Array<any>, sorted: Array<any>): void {
    sorted[item].text = this.struct.text;
    unsorted.splice(unsorted.indexOf(this.struct), 1);
    this.showAlert = false;
    this.struct = undefined;
  }

  saveAndRedirect(route: string) {
    this.levelService.increaseLevel(this.level + 1);
    const modalInstance = this.modalService.show(MilestoneModalComponent);
    modalInstance.content.text = 'Du hast das Thema Klassen & Objekte abgeschlossen und somit die '
      + 'Grundprinzipien der Objektorientierung kennen gelernt.';
    modalInstance.content.route = route;
    modalInstance.content.level = 7;
  }
}
