import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyhomepageComponent } from './bodyhomepage.component';

describe('BodyhomepageComponent', () => {
  let component: BodyhomepageComponent;
  let fixture: ComponentFixture<BodyhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyhomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
