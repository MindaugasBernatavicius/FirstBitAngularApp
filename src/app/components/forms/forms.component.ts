import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  testProduct: Product;
  @ViewChild('inputProductTitle') private ipt!: any;
  @ViewChild('f') private myForm!: NgForm;
  // @ViewChild('f') private myForm: NgForm | undefined;

  constructor() {
    this.testProduct = {
      id: 1,
      // title: `Pants`,
      title: ``,
      count: 990,
      pricePerUnitInDollars: 150.79,
      currency: 'USD',
      score: 4.75
    };
  }

  ngOnInit(): void { }

  formSubmitted($event: MouseEvent): void {
    console.log(this.testProduct);
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
  }

  invalidateForm($event: MouseEvent): void {
    // this.ipt.setErrors({ 'invalid': true });
    this.myForm.controls['title'].setErrors({ 'incorrect': true });
  }
}
