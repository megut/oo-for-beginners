import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {BsModalService} from 'ngx-bootstrap';
import {Struct} from '../../shared/struct';
import {ShuffleService} from '../../shared/shuffle.service';
import {AbstractLevelComponent} from '../../shared/abstract-level-component';

@Component({
  selector: 'app-level3-game',
  templateUrl: './level3-game.component.html',
  styleUrls: ['./level3-game.component.css']
})
export class Level3GameComponent implements OnInit, AbstractLevelComponent {

  level = 3;

  prices: Array<number> = [2.99, 4.49, 1.99, 2.00, 5.59];
  structs: Array<Struct>;
  showAlert = false;
  orderedStructs: Array<Struct> = new Array<Struct>();
  struct: Struct | undefined;

  constructor(
    private router: Router,
    private levelService: LevelService,
    private modalService: BsModalService,
    private shuffleService: ShuffleService
  ) {
  }

  ngOnInit() {
    this.structs = Struct.initStructs();
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
    if (this.struct && (this.orderedStructs[index].order < 2 && this.struct.order < 2) ||
      this.orderedStructs[index].order === this.struct.order) {
      this.copyAndDeleteItem(index, this.structs, this.orderedStructs);
      this.showAlert = false;
      this.struct = undefined;
    } else {
      this.showAlert = true;
    }
  }

  saveAndRedirect(route: string) {
    this.levelService.increaseLevel(this.level + 1);
    this.router.navigate([route]);
  }

  copyAndDeleteItem(item: any, unsorted: Array<any>, sorted: Array<any>): void {
    sorted[item].text = this.struct.text;
    unsorted.splice(unsorted.indexOf(this.struct), 1);
  }
}
