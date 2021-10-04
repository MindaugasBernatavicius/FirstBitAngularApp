import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { StarComponent } from './components/star/star.component';
import { ProductComponent } from './components/product/product.component';
import { ProductGuard } from './guards/product.guard';
import { FormsComponent } from './components/forms/forms.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConvertToSpacePipe,
    AboutComponent,
    ProductsComponent,
    HomeComponent,
    FooterComponent,
    StarComponent,
    ProductComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent }, // http://localhost/about --> AboutComponent
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', canActivate: [ProductGuard], component: ProductComponent },
      { path: 'home', component: HomeComponent },
      { path: 'forms', component: FormsComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
