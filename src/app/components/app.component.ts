import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

// app.component.ts
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <app-header></app-header>
    <div class="container">
      <h2>Interpolation</h2>
      <hr />
      <p style="background-color: red; width: {{ counter * 2 + counter2 }}px">
        Hello world
      </p>
      <button>Hi ---</button>
      <pre>[ vardas: "Jonas" ]</pre>

      <p>{{ title }}</p>
      <p>{{ subtitle }}</p>
      <p>{{ subtitle + ' ' + title }}</p>
      <p>2 + 2 = {{ 2 + 2 }}</p>
      <p>firstNumber + secondNumber = {{ firstNumber + getSecondNumber() }}</p>

      <h2>Event binding</h2>
      <hr />
      <p>Example with incrementation button</p>
      <p>{{ counter }}</p>
      <p>{{ counter2 }}</p>
      <p>{{ counter + counter2 }}</p>
      <!-- <button (click)="counter = counter + 1">Click me!</button> -->
      <button class="btn btn-warning" (click)="clickHandler($event)">
        Click me!
      </button>
      <button class="btn btn-warning" (click)="clickHandler2($event)">
        Click me2!
      </button>

      <br />
      <a href="https://blog.mindaugas.cf">This will not be red!</a>

      <br />
      <div>Mouse x: {{ mouseX }} mouse y: {{ mouseY }}</div>
      <div
        #rect
        (mousemove)="mouseMoveHandler($event)"
        style="height: 200px; width: 200px; background-color: red"
      ></div>
      <br />

      <h2>Two-way binding</h2>
      <hr />
      <!-- Dvikryptis: -->
      <input [(ngModel)]="text" />
      <p>{{ text }}</p>

      <hr />
      <!-- 2 vienkrypičai -->
      <input (input)="userInput($event)" [value]="text" />
      <p>{{ text }}</p>

      <h2>Directives</h2>
      <hr />
      <h4>Let's show a message to the user after he presses a button</h4>
      <!-- 0 -->
      <!-- <p *ngIf="isMessageShown">This is a message that will be shown after clicking the button</p> -->

      <!-- 1 -->
      <!-- <p *ngIf="isMessageShown">This is a message that will be shown after clicking the button</p> -->
      <!-- <p *ngIf="!isMessageShown" style="height: 24px"></p> -->

      <!-- 2 -->
      <div style="height: 2.5rem">
        <p *ngIf="isMessageShown">
          This is a message that will be shown after clicking the button
        </p>
      </div>

      <button (click)="toggleMessage()" class="btn btn-warning">
        {{ buttonText }}
      </button>

      <!-- ref: https://stackoverflow.com/a/64484608/1964707 -->
      <button (click)="toggleMessage()" class="btn btn-warning">
        Click to {{ isMessageShown ? 'hide' : 'see' }} the message
      </button>
      <hr />
      <h4>Let's print a table</h4>

      <table *ngIf="products.length !== 0" class="table" >
        <thead>
          <tr>
            <th>Title</th>
            <th>Count</th>
            <th>Price per unit</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of products">
            <td>{{ product.title | lowercase }}</td>
            <td>{{ product.count }}</td>
            <td>{{ product.pricePerUnitInDollars | currency: product.currency : 'symbol' : '7.2-3'  }}</td>
            <!-- <td>{{ product.pricePerUnitInDollars | currency: 'EUR' }}</td> -->
          </tr>
        </tbody>
      </table>
      <p *ngIf="products.length == 0" class="alert alert-warning">No data!</p>

      <br />
    </div>
  `,
  styles: ['p {color: salmon;} ', 'button { background-color: white; }'],
})
export class AppComponent implements AfterViewInit {
  ///////////////////
  // Interpolation //
  ///////////////////
  title = 'FirstBitAngularApp';
  subtitle = 'This is an amazing application';
  firstNumber = 5;
  secondNumber = 10;

  ///////////////////
  // Event binding //
  ///////////////////
  getSecondNumber() {
    return this.secondNumber;
  }

  counter = 0;
  clickHandler($event: MouseEvent) {
    console.log(' >>> ' + this.counter);
    this.counter++;
  }

  counter2 = 0;
  clickHandler2($event: MouseEvent) {
    console.log(' >>> ' + this.counter2);
    --this.counter2;
  }

  // Ref: https://stackoverflow.com/questions/48226868/document-getelementbyid-replacement-in-angular4-typescript/48226955
  @ViewChild('rect') rect: ElementRef | undefined;
  ngAfterViewInit() {
    // console.log(this.rect?.nativeElement.getBoundingClientRect());
  }

  mouseX = 0;
  mouseY = 0;
  mouseMoveHandler($event: MouseEvent) {
    // console.log($event.target);
    // console.log($event.type);
    // console.log($event.target);
    // console.log($event.x);
    // console.log($event.y);
    // console.log($event.target);

    // https://stackoverflow.com/questions/3234256/find-mouse-position-relative-to-element
    this.mouseX =
      $event.clientX - this.rect?.nativeElement.getBoundingClientRect().left;
    this.mouseY =
      $event.clientY - this.rect?.nativeElement.getBoundingClientRect().top;
  }

  text = `Placeholder text`;
  userInput($event: Event) {
    this.text = (<HTMLTextAreaElement>$event.target).value;
  }

  ////////////////
  // Directives //
  ////////////////
  isMessageShown = false;
  buttonText = 'Click to see the message';
  toggleMessage() {
    if (this.isMessageShown) {
      this.isMessageShown = false;
      this.buttonText = 'Click to see the message';
    } else {
      this.isMessageShown = true;
      this.buttonText = 'Click to hide the message';
    }
  }

  products: any[] = [
    { title: `Adidas X512 Shoes`, count: 150, pricePerUnitInDollars: 150.79, currency: 'USD' },
    { title: `Nike Jordanium Shoes`, count: 205, pricePerUnitInDollars: 150.99, currency: 'EUR' },
    { title: `Balenciaga Amazing Shoes`, count: 990, pricePerUnitInDollars: 990.9911, currency: 'JPY' },
  ];
}
