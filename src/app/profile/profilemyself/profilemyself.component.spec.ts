import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemyselfComponent } from './profilemyself.component';

describe('ProfilemyselfComponent', () => {
  let component: ProfilemyselfComponent;
  let fixture: ComponentFixture<ProfilemyselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilemyselfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilemyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
