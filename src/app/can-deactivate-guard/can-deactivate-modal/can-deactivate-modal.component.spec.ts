import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDeactivateModalComponent } from './can-deactivate-modal.component';
import { BsModalRef } from 'ngx-bootstrap';
import createSpyObj = jasmine.createSpyObj;

describe('CanDeactivateModalComponent', () => {
  let component: CanDeactivateModalComponent;
  let fixture: ComponentFixture<CanDeactivateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CanDeactivateModalComponent],
      providers: [{
        provide: BsModalRef,
        useValue: createSpyObj(['hide'])
      }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanDeactivateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
