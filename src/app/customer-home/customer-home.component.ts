import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-customer-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-home.component.html',
  styleUrl: './customer-home.component.css',
})
export class CustomerHomeComponent {
  slides = [
    { image: 'ad_red.png' },
    { image: 'ad_green.png' },
    { image: 'ad_blue.png' },
  ];
  currentSlide = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    let indicators = document.getElementById('slide-indicators') as HTMLElement;
    console.log(
      Array.prototype.indexOf.call(indicators.parentNode, indicators)
    );
  }
  showSlide(i: number) {
    this.currentSlide = i;
  }
}
