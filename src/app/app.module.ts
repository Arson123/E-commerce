import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { AlphanumericPipe } from './pipes/alphanumeric.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { SwiperModule } from 'swiper/angular';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ContactComponent,
    ReversePipe,
    TimeAgoPipe,
    AlphanumericPipe,
    HighlightDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    SwiperModule,
    HttpClientModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
