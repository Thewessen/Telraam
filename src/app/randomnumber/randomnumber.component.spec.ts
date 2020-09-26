import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomnumberComponent } from './randomnumber.component';

describe('RandomnumberComponent', () => {
  let component: RandomnumberComponent;
  let fixture: ComponentFixture<RandomnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
