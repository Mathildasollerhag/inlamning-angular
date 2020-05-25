import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDeckComponent } from './components/product-deck/product-deck.component';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component';
import { ProductComponent } from './views/product/product.component';
import { ProductCatalogReducer } from './store/reducers/product-catalog.reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingcartReducer } from './store/reducers/shoppingcart.reducer';
import { CartItemComponent } from './components/shoppingcart/cart-item/cart-item.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart/shoppingcart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDeckComponent,
    LandingpageComponent,
    AboutComponent,
    ContactComponent,
    ProductCatalogComponent,
    ProductComponent,
    ShoppingcartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      productcatalog: ProductCatalogReducer,
      product: ProductReducer,
      shoppingcart: ShoppingcartReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
