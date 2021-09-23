import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  template: `
    <label>Filter:</label>
    <!-- <input type="text" (input)="onFilter($any($event.target).value)"> -->
    <input type="text" (input)="onFilter($event)">
    <h4>Let's print a table</h4>

    <!-- <table *ngIf="products.length !== 0" class="table" > -->
    <table *ngIf="products.length > 0; else noProductsWarning" class="table" >
      <thead>
        <tr>
          <th>Title</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of filteredProducts">
          <!-- <td>{{ product.title | convertToSpace: '-' | convertToSpace: '\\\\$' | convertToSpace: '\\\\[' | convertToSpace: '\\\\]' }}</td> -->
          <td>{{ product.title | convertToSpace: ['-', '\\\\$', '\\\\[', '\\\\]'] }}</td>
          <td>{{ product.count | currency }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <p *ngIf="products.length == 0" class="alert alert-warning">No data!</p> -->
    <ng-template #noProductsWarning>
      <p class="alert alert-warning">No data!</p>
    </ng-template>`,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  filteredProducts: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  onFilter($event: any) {
    let s = $event.target.value.toLocaleLowerCase()
    this.filteredProducts = this.products.filter(p => p.title.toLocaleLowerCase().indexOf(s) != -1);
  }

  ngOnInit(): void {
  }
}
