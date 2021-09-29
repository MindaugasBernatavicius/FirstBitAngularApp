import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { id: 1, title: `Adidas----X512-Shoes`, count: 990, pricePerUnitInDollars: 150.79, currency: 'USD', score: 4.75 },
    { id: 2, title: `Nike-Jordanium-$-Shoes`, count: 990, pricePerUnitInDollars: 990.9911, currency: 'EUR', score: 2.85 },
    { id: 3, title: `Balenciaga Amazing       Shoes`, count: 205, pricePerUnitInDollars: 150.99, currency: 'JPY', score: 3.2 },
    { id: 4, title: `Gucci Dumpsterfire [] Shoes`, count: 150, pricePerUnitInDollars: 911.9911, currency: 'EUR', score: 0.5 },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.filter(p => p.id === id)[0];
  }
}
