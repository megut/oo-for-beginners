import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3IntroductionComponent } from './level3-introduction.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Level3IntroductionComponent', () => {
  let component: Level3IntroductionComponent;
  let fixture: ComponentFixture<Level3IntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [Level3IntroductionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level3IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
