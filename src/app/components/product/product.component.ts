import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  // product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    // this.product = this.productService.getProduct(id);
    this.productService.getProductFromBe(id).subscribe(
      res => { this.product = res },
      err => { console.log(err); }
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  onSubmitProduct(product: Product): void {
    this.productService.updateProduct(product).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
