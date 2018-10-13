import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasonHeaderComponent } from './leason-header.component';

describe('LeasonHeaderComponent', () => {
  let component: LeasonHeaderComponent;
  let fixture: ComponentFixture<LeasonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
