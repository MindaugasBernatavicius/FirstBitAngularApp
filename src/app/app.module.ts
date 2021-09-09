import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConvertToSpacePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
