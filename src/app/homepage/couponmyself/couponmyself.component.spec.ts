import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponmyselfComponent } from './couponmyself.component';

describe('CouponmyselfComponent', () => {
  let component: CouponmyselfComponent;
  let fixture: ComponentFixture<CouponmyselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponmyselfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponmyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
