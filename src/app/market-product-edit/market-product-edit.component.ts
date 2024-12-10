import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/types';

@Component({
  selector: 'app-market-product-edit',
  imports: [],
  templateUrl: './market-product-edit.component.html',
  styleUrl: './market-product-edit.component.css',
})
export class MarketProductEditComponent {
  scrollLeft() {
    let index = 0;
    let flex = document.getElementById('productScroll') as HTMLElement;
    index += 205;
    flex.style.transform = `translateX(${index}px)`;
  }
  scrollRight() {
    let index = 0;
    let flex = document.getElementById('productScroll') as HTMLElement;
    index -= 25;
    flex.style.transform = `translateX(${index}px)`;
  }
}
