import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabusinessComponent } from './databusiness.component';

describe('DatabusinessComponent', () => {
  let component: DatabusinessComponent;
  let fixture: ComponentFixture<DatabusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
