import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1IntroductionComponent } from './level1-introduction.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Level1IntroductionComponent', () => {
  let component: Level1IntroductionComponent;
  let fixture: ComponentFixture<Level1IntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Level1IntroductionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
