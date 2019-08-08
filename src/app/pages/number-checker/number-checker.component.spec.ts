import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCheckerComponent } from './number-checker.component';

describe('NumberCheckerComponent', () => {
  let component: NumberCheckerComponent;
  let fixture: ComponentFixture<NumberCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
