import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level5IntroductionComponent } from './level5-introduction.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Level5IntroductionComponent', () => {
  let component: Level5IntroductionComponent;
  let fixture: ComponentFixture<Level5IntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Level5IntroductionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level5IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
