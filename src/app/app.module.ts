import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FilterPipe } from './filter.pipe';
import { SelectPipe } from './select.pipe';
import { OrderrByPipe } from './OrderBy.pipe';

import { PagerService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FilterPipe,
    SelectPipe,
    OrderrByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
