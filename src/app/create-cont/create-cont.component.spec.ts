import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContComponent } from './create-cont.component';

describe('CreateContComponent', () => {
  let component: CreateContComponent;
  let fixture: ComponentFixture<CreateContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
