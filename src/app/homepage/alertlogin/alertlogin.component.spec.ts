import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertloginComponent } from './alertlogin.component';

describe('AlertloginComponent', () => {
  let component: AlertloginComponent;
  let fixture: ComponentFixture<AlertloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
