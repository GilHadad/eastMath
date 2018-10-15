import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExrciseHistoryComponent } from './exrcise-history.component';

describe('ExrciseHistoryComponent', () => {
  let component: ExrciseHistoryComponent;
  let fixture: ComponentFixture<ExrciseHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExrciseHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExrciseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
