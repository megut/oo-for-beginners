import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LevelService} from './level.service';

@Injectable({
  providedIn: 'root'
})
export class LevelGuard implements CanActivate {

  constructor(private levelService: LevelService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!next.data['level']) {
      return true;
    }
    return next.data['level'] <= this.levelService.getLevel();
  }
}

