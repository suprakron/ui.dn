import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertregisterComponent } from './alertregister.component';

describe('AlertregisterComponent', () => {
  let component: AlertregisterComponent;
  let fixture: ComponentFixture<AlertregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
