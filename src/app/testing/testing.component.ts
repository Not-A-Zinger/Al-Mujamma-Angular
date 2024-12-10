import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
  imports: [CommonModule, FormsModule],
})
export class TestingComponent {
  slides = [
    { image: 'ad_red.png' },
    { image: 'ad_green.png' },
    { image: 'ad_blue.png' },
  ];
  currentSlide = 0;
  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Adjust delay here
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    console.log(this.currentSlide);
  }
}
