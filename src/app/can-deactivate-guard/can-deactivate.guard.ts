import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CanDeactivateModalComponent } from './can-deactivate-modal/can-deactivate-modal.component';
import { AbstractLevelComponent } from '../shared/abstract-level-component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<AbstractLevelComponent> {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  canDeactivate(component: AbstractLevelComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.levelCompleted()) {
      return true;
    }
    this.modalRef = this.modalService.show(CanDeactivateModalComponent);
    return this.modalRef.content.onClose;
  }
}
