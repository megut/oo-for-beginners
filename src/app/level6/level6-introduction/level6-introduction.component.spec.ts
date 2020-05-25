import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level6IntroductionComponent } from './level6-introduction.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Level6IntroductionComponent', () => {
  let component: Level6IntroductionComponent;
  let fixture: ComponentFixture<Level6IntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Level6IntroductionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level6IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
