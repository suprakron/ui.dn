import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountbankComponent } from './accountbank.component';

describe('AccountbankComponent', () => {
  let component: AccountbankComponent;
  let fixture: ComponentFixture<AccountbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountbankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
