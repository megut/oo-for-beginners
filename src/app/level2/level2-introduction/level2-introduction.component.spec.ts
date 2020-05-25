import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2IntroductionComponent } from './level2-introduction.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Level2IntroductionComponent', () => {
  let component: Level2IntroductionComponent;
  let fixture: ComponentFixture<Level2IntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Level2IntroductionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
