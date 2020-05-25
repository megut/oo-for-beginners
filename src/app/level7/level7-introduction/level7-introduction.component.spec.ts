import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level7IntroductionComponent } from './level7-introduction.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ColorPickerModule } from 'ngx-color-picker';

describe('Level7IntroductionComponent', () => {
  let component: Level7IntroductionComponent;
  let fixture: ComponentFixture<Level7IntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ColorPickerModule],
      declarations: [Level7IntroductionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level7IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
