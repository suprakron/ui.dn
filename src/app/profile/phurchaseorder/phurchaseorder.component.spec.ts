import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhurchaseorderComponent } from './phurchaseorder.component';

describe('PhurchaseorderComponent', () => {
  let component: PhurchaseorderComponent;
  let fixture: ComponentFixture<PhurchaseorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhurchaseorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
