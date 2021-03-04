import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContComponent } from './show-cont.component';

describe('ShowContComponent', () => {
  let component: ShowContComponent;
  let fixture: ComponentFixture<ShowContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
