import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDevComponent } from './nav-dev.component';

describe('NavDevComponent', () => {
  let component: NavDevComponent;
  let fixture: ComponentFixture<NavDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
