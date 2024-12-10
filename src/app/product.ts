import { Market } from './market';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  desc: string;
  market: Market;
  image: string;
}
