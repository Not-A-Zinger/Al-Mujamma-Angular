import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMarketComponent } from './login-market.component';

describe('LoginMarketComponent', () => {
  let component: LoginMarketComponent;
  let fixture: ComponentFixture<LoginMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginMarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
