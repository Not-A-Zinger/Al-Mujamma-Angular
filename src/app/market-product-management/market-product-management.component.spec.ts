import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketProductManagementComponent } from './market-product-management.component';

describe('MarketProductManagementComponent', () => {
  let component: MarketProductManagementComponent;
  let fixture: ComponentFixture<MarketProductManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketProductManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
