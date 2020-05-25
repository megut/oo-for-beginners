import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {MilestoneModalComponent} from '../../modals/milestone-modal/milestone-modal.component';
import {BsModalService} from 'ngx-bootstrap';
import {Struct} from '../../shared/struct';
import {ShuffleService} from '../../shared/shuffle.service';
import {AbstractLevelComponent} from '../../shared/abstract-level-component';

@Component({
  selector: 'app-level4-game',
  templateUrl: './level4-game.component.html',
  styleUrls: ['./level4-game.component.css']
})
export class Level4GameComponent implements OnInit, AbstractLevelComponent {

  level = 4;

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
    this.structs = Struct.initStructsLevel4();
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
    if (this.orderedStructs[index].order === this.struct.order) {
      this.copyAndDeleteItem(index, this.structs, this.orderedStructs);
      this.showAlert = false;
      this.struct = undefined;
    } else {
      this.showAlert = true;
    }
  }

  saveAndRedirect(route: string) {
    this.levelService.increaseLevel(this.level + 1);
    const modalInstance = this.modalService.show(MilestoneModalComponent);
    modalInstance.content.text = 'Du hast das Thema Kontrollstrukturen abgeschlossen!';
    modalInstance.content.route = route;
    modalInstance.content.level = 4;
  }

  copyAndDeleteItem(item: any, unsorted: Array<any>, sorted: Array<any>): void {
    sorted[item].text = this.struct.text;
    unsorted.splice(unsorted.indexOf(this.struct), 1);
  }
}
