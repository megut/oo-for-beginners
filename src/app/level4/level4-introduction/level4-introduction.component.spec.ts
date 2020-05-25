import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level4IntroductionComponent } from './level4-introduction.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Level4IntroductionComponent', () => {
  let component: Level4IntroductionComponent;
  let fixture: ComponentFixture<Level4IntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Level4IntroductionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level4IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
