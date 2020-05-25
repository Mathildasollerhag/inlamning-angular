import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProductComponent } from './views/product/product.component';
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'products', component: ProductCatalogComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
