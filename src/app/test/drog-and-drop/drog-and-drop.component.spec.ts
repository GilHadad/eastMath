import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogAndDropComponent } from './drog-and-drop.component';

describe('DrogAndDropComponent', () => {
  let component: DrogAndDropComponent;
  let fixture: ComponentFixture<DrogAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrogAndDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrogAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
