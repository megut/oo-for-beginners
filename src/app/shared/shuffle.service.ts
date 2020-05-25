import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {

  constructor() {
  }

  public shuffleValues(values: Array<any>): Array<any> {
    let tmp, rand;
    for (let i = 0; i < values.length; i++) {
      rand = Math.floor(Math.random() * values.length);
      tmp = values[i];
      values[i] = values[rand];
      values[rand] = tmp;
    }
    return values;
  }
}
