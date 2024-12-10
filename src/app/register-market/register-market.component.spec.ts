import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMarketComponent } from './register-market.component';

describe('RegisterMarketComponent', () => {
  let component: RegisterMarketComponent;
  let fixture: ComponentFixture<RegisterMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterMarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
