import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapersonnalComponent } from './datapersonnal.component';

describe('DatapersonnalComponent', () => {
  let component: DatapersonnalComponent;
  let fixture: ComponentFixture<DatapersonnalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatapersonnalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapersonnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
