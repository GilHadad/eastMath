import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasonZeroComponent } from './leason-zero.component';

describe('LeasonZeroComponent', () => {
  let component: LeasonZeroComponent;
  let fixture: ComponentFixture<LeasonZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasonZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasonZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
