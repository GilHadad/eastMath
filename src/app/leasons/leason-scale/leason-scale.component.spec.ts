import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasonScaleComponent } from './leason-scale.component';

describe('LeasonScaleComponent', () => {
  let component: LeasonScaleComponent;
  let fixture: ComponentFixture<LeasonScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasonScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasonScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
