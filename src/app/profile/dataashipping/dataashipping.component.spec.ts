import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataashippingComponent } from './dataashipping.component';

describe('DataashippingComponent', () => {
  let component: DataashippingComponent;
  let fixture: ComponentFixture<DataashippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataashippingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataashippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
