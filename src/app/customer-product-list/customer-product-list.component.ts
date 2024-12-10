import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { Market } from '../market';
import { CommonModule } from '@angular/common';
import Fuse from 'fuse.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-product-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-product-list.component.html',
  styleUrl: './customer-product-list.component.css',
})
export class CustomerProductListComponent {
  constructor(private route: ActivatedRoute) {}

  //Creates a list of mockup markets
  markets: Market[] = [
    { id: '1', name: 'بنده', logo: 'panda.jpg' },
    { id: '2', name: 'العثيم', logo: 'othaim.jpg' },
  ];

  //Creates a list of mockup products
  products: Product[] = [
    {
      id: '1',
      name: 'لابتوب',
      category: 'الكترونيات',
      price: 500,
      desc: 'لابتوب ذو أداء عالي',
      market: this.markets[0],
      image: 'laptop.jpg',
    },
    {
      id: '2',
      name: 'جوال',
      category: 'الكترونيات',
      price: 1200,
      desc: 'جوال ذكي',
      market: this.markets[1],
      image: 'smartphone.jpg',
    },
    {
      id: '3',
      name: 'حذاء',
      category: 'موضة',
      price: 30,
      desc: 'أحذية جميلة ومريحة',
      market: this.markets[0],
      image: 'shoes.jpg',
    },
    {
      id: '4',
      name: 'تيشيرت',
      category: 'موضة',
      price: 20,
      desc: 'تيشيرت ملون متوافق مع الموضة',
      market: this.markets[1],
      image: 't-shirt.jpg',
    },
  ];

  //sets the values that will affect the search and filtering processes
  searchTerm: string = '';
  selectedPriceOrder: string = 'asc';
  marketSearchTerm: string = '';
  selectedCategory: string = 'الكل';
  filteredProducts: Product[] = this.products;
  ngOnInit() {
    this.route.queryParams.subscribe((queryParam) => {
      console.log('Query:', queryParam.q);

      //passes the category in the link only if it exists
      if (queryParam.q) {
        this.selectedCategory = queryParam.q;
      }
    });

    //performs a search on window load
    this.performSearch();
  }
  performSearch() {
    //the options in the fuse.js
    const options = {
      keys: ['name', 'desc', 'category', 'market.name'], //applied keys in the search
      threshold: 0.3, //"strictness", 0:Very Stricy, 1: Very Loose
    };

    //Creates a fuse object, and passes the key values and dataset to operate on
    const fuse = new Fuse(this.products, options);

    //results start as the search input, then evolve
    let results = this.searchTerm //if searchTerm is not empty
      ? fuse.search(this.searchTerm).map((result) => result.item) //assign it to the result of the fuzzy search
      : this.products; //otherwise assign it to all the products

    //applies an extra layer of filtering: category AND market
    results = results.filter((product) => {
      return (
        (this.selectedCategory === 'الكل' ||
          product.category === this.selectedCategory) &&
        product.market.name
          .toLowerCase()
          .includes(this.marketSearchTerm.toLowerCase())
      );
    });

    //applies a third an final layer: sorting by price
    //if user want an ascending order (default)
    if (this.selectedPriceOrder == 'asc') {
      results = results.sort((a, b) => a.price - b.price);
      this.filteredProducts = results;
    }
    //if user wants an descending order
    if (this.selectedPriceOrder == 'desc') {
      results = results.sort((a, b) => b.price - a.price);
      this.filteredProducts = results;
    }
  }

  //called when the user selects a market
  selectMarket(market: Market) {
    this.marketSearchTerm = market.name; //sets the searched market
    this.performSearch(); //performes the search
  }

  //called when the user clears the market search
  clearMakretSearchTerm() {
    this.marketSearchTerm = ''; //sets the search market as none
    this.performSearch(); //performs the search
  }
}
