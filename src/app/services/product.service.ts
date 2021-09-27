import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { title: `Adidas----X512-Shoes`, count: 990, pricePerUnitInDollars: 150.79, currency: 'USD' },
    { title: `Nike-Jordanium-$-Shoes`, count: 990, pricePerUnitInDollars: 990.9911, currency: 'EUR' },
    { title: `Balenciaga Amazing       Shoes`, count: 205, pricePerUnitInDollars: 150.99, currency: 'JPY' },
    { title: `Gucci Dumpsterfire [] Shoes`, count: 150, pricePerUnitInDollars: 911.9911, currency: 'EUR' },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
