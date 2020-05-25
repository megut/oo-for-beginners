import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private cookieService: CookieService) {
  }

  public increaseLevel(newLevel: number): number {
    const cookie = this.cookieService.get('oo-for-career-changers-level');
    if (cookie) {
      const oldLevel = parseInt(cookie, 10);
      if (newLevel > oldLevel) {
        this.cookieService.set('oo-for-career-changers-level', newLevel + '');
      }
      return newLevel;
    } else {
      this.cookieService.set('oo-for-career-changers-level', '1');
      return 1;
    }
  }

  public getLevel(): number {
    if (!this.cookieService.check('oo-for-career-changers-level')) {
      this.cookieService.set('oo-for-career-changers-level', '1');
      return 1;
    } else {
      return parseInt(this.cookieService.get('oo-for-career-changers-level'), 10);
    }
  }

}
