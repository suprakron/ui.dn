import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewcustomerComponent } from './reviewcustomer.component';

describe('ReviewcustomerComponent', () => {
  let component: ReviewcustomerComponent;
  let fixture: ComponentFixture<ReviewcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewcustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
