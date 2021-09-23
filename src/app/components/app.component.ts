import { Component } from '@angular/core';

// app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container p-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent { }
