import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketProductEditComponent } from './market-product-edit.component';

describe('MarketProductEditComponent', () => {
  let component: MarketProductEditComponent;
  let fixture: ComponentFixture<MarketProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketProductEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
