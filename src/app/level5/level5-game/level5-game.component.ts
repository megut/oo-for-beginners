import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {BsModalService} from 'ngx-bootstrap';
import {Attribute} from './attribute';
import {AbstractLevelComponent} from '../../shared/abstract-level-component';

@Component({
  selector: 'app-level5-game',
  templateUrl: './level5-game.component.html',
  styleUrls: ['./level5-game.component.css']
})
export class Level5GameComponent extends AbstractLevelComponent implements OnInit {

  level = 5;

  attributes: Array<Attribute>;

  types = ['String', 'boolean', 'int', 'double', 'Array mit Strings'];

  showAlert = false;

  value = undefined;

  constructor(
    private router: Router,
    private levelService: LevelService,
    private modalService: BsModalService
  ) {
    super();
  }

  ngOnInit() {
    this.attributes = Attribute.initAttributes();
  }

  levelCompleted(): boolean {
    return (!this.attributes.find(attribute => attribute.assigned === false));
  }

  setValue(attribute) {
    this.showAlert = false;
    this.value = attribute;
  }

  addTypeToAttribute(type) {
    if (this.value) {
      if (this.value.type.includes(type)) {
        this.value.type = [type];
        this.value.assigned = true;
        this.value = undefined;
        this.showAlert = false;
        return;
      }
    }
    this.showAlert = true;
  }

  saveAndRedirect(route: string) {
    this.levelService.increaseLevel(this.level + 1);
    this.router.navigate([route]);
  }

}
