import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneModalComponent } from './milestone-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BsModalRef } from 'ngx-bootstrap';
import createSpyObj = jasmine.createSpyObj;

describe('MilestoneModalComponent', () => {
  let component: MilestoneModalComponent;
  let fixture: ComponentFixture<MilestoneModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MilestoneModalComponent],
      providers: [
        {
          provide: BsModalRef,
          useValue: createSpyObj(['hide'])
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
