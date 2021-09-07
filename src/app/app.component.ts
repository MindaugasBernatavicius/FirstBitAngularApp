import { Component } from '@angular/core';

// app.component.ts
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <app-header></app-header>
    <div class="container">
      <p style="background-color: red; width: {{ counter * 2 + counter2 }}px">Hello world</p>
      <button>Hi ---</button>
      <pre>[ vardas: "Jonas" ]</pre>

      <!-- (String) Interpolation -->
      <p>{{ title }}</p>
      <p>{{ subtitle }}</p>
      <p>{{ subtitle + ' ' + title }}</p>
      <p>2 + 2 = {{ 2 + 2 }}</p>
      <p>firstNumber + secondNumber = {{ firstNumber + getSecondNumber() }}</p>

      <hr />
      <p>Example with incrementation button</p>
      <p>{{ counter }}</p>
      <p>{{ counter2 }}</p>
      <p>{{ counter + counter2 }}</p>
      <!-- <button (click)="counter = counter + 1">Click me!</button> -->
      <button class="btn btn-warning" (click)="clickHandler()">Click me!</button>
      <button class="btn btn-warning" (click)="clickHandler2()">Click me2!</button>

      <a href="https://blog.mindaugas.cf">This will not be red!</a>
    <div>
  `,
  styles: [
    'p {color: salmon;} ',
    'button { background-color: white; }'],
})
export class AppComponent {
  title = 'FirstBitAngularApp';
  subtitle = 'This is an amazing application';
  firstNumber = 5;
  secondNumber = 10;

  getSecondNumber() {
    return this.secondNumber;
  }

  counter = 0;
  clickHandler() {
    console.log(" >>> " + this.counter);
    this.counter++;
  }

  counter2 = 0;
  clickHandler2() {
    console.log(" >>> " + this.counter2);
    --this.counter2;
  }
}
