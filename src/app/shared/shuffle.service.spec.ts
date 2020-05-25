import { inject, TestBed } from '@angular/core/testing';

import { ShuffleService } from './shuffle.service';

describe('ShuffleService', () => {

  const array = [1, 2, 3, 4, 5];
  const copiedArray = [1, 2, 3, 4, 5];

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShuffleService = TestBed.get(ShuffleService);
    expect(service).toBeTruthy();
  });

  it('should shuffle', inject([ShuffleService], (shuffleService: ShuffleService) => {
    const newArray = shuffleService.shuffleValues(copiedArray);
    expect(newArray.length).toBe(array.length);
    newArray.forEach(i => {
      expect(array.includes(i)).toBeTruthy();
    });
    let newOrder = false;
    newArray.forEach((i, index) => {
      if (newArray[index] !== array[index]) {
        newOrder = true;
      }
    });
    expect(newOrder).toBeTruthy();
  }));
});
