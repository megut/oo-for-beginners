import { inject, TestBed } from '@angular/core/testing';

import { CanDeactivateGuard } from './can-deactivate.guard';
import { BsModalService } from 'ngx-bootstrap';
import createSpyObj = jasmine.createSpyObj;

describe('CanDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CanDeactivateGuard,
        {
          provide: BsModalService,
          useValue: createSpyObj(['show'])
        }
      ]
    });
  });

  it('should ...', inject([CanDeactivateGuard], (guard: CanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
