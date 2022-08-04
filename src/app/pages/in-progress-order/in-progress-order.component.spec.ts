import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressOrderComponent } from './in-progress-order.component';

describe('InProgressOrderComponent', () => {
  let component: InProgressOrderComponent;
  let fixture: ComponentFixture<InProgressOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProgressOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProgressOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
