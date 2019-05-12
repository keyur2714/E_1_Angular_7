import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEntryComponent } from './product/product-entry/product-entry.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'products' , component : ProductListComponent},
  {path : 'productDetail/:id' , component : ProductDetailComponent},
  {path : 'productEntry' , component : ProductEntryComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'contactus' , component : ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
