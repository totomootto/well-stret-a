import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericInputDateComponent } from './generic-input-date.component';

describe('GenericInputDateComponent', () => {
  let component: GenericInputDateComponent;
  let fixture: ComponentFixture<GenericInputDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericInputDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
