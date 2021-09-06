import { Component } from '@angular/core';

// app.component.ts
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <app-header></app-header>
    <div class="container">
      <p>Hello world</p>
      <button>Hi ---</button>
      <pre>[ vardas: "Jonas" ]</pre>

      <!-- (String) Interpolation -->
      <p>{{ title }}</p>
      <p>{{ subtitle }}</p>
      <p>{{ subtitle + ' ' + title }}</p>
      <p>2 + 2 = {{ 2 + 2 }}</p>
      <p>firstNumber + secondNumber = {{ firstNumber + secondNumber }}</p>

      <hr />
      <p>Example with incrementation button</p>
      <p>{{ counter }}</p>
      <!-- <button (click)="counter = counter + 1">Click me!</button> -->
      <button class="btn btn-warning" (click)="clickHandler()">Click me!</button>
    <div>
  `,
  styles: ['p {color: salmon;} ', 'button { background-color: white; }'],
})
export class AppComponent {
  title = 'FirstBitAngularApp';
  subtitle = 'This is an amazing application';
  firstNumber = 5;
  secondNumber = 10;

  counter = 0;
  clickHandler() {
    this.counter++;
  }
}
