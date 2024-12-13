import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteorderComponent } from './favoriteorder.component';

describe('FavoriteorderComponent', () => {
  let component: FavoriteorderComponent;
  let fixture: ComponentFixture<FavoriteorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
