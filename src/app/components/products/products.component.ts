import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  template: `
    <label>Filter:</label>
    <!-- <input type="text" (input)="onFilter($any($event.target).value)"> -->
    <input type="text" (input)="onFilter($event)">
    <h4>Let's print a table</h4>

    <!-- <table *ngIf="products.length !== 0" class="table" > -->
    <table *ngIf="products.length > 0; else noProductsWarning" class="table" >
      <thead>
        <tr>
          <th (click)="sortBy('title')">Title
            <i class="fa fa-{{ sortField === 'title' ?
              (direction === 'up' ? 'chevron-up' : 'chevron-down') :
              'sort'
            }}"></i></th>
          <th (click)="sortBy('count')">Count
            <i class="fa fa-{{ sortField === 'count' ?
              (direction === 'up' ? 'chevron-up' : 'chevron-down') :
              'sort'
            }}"></i></th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of filteredProducts">
          <!-- <td>{{ product.title | convertToSpace: '-' | convertToSpace: '\\\\$' | convertToSpace: '\\\\[' | convertToSpace: '\\\\]' }}</td> -->
          <td>{{ product.title | convertToSpace: ['-', '\\\\$', '\\\\[', '\\\\]'] }}</td>
          <td>{{ product.count | currency }}</td>
          <td><app-star></app-star></td>
        </tr>
      </tbody>
    </table>
    <!-- <p *ngIf="products.length == 0" class="alert alert-warning">No data!</p> -->
    <ng-template #noProductsWarning>
      <p class="alert alert-warning">No data!</p>
    </ng-template>`,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  filteredProducts: Product[];
  direction = "up";
  sortField = "";

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  onFilter($event: any) {
    let s = $event.target.value.toLocaleLowerCase()
    this.filteredProducts = this.products.filter(p => p.title.toLocaleLowerCase().indexOf(s) != -1);
  }

  sortBy(field: string) {
    let f = field as keyof Product;
    if (this.direction == "up") {
      this.filteredProducts.sort((a, b) => {
        // console.log("A: " + JSON.stringify(a));
        // console.log("B: " + JSON.stringify(b));
        return a[f] > b[f] ? -1 : 0
      });
      this.direction = "down";
    } else {
      this.filteredProducts.sort((a, b) => { return a[f] < b[f] ? -1 : 0 });
      this.direction = "up";
    }
    this.sortField = field;
  }

  ngOnInit(): void {
  }
}
