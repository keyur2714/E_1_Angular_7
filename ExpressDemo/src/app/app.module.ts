import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductService } from './manage-products/product.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductEntryComponent } from './product-entry/product-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageProductsComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
