import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';
import { AuthGuardService } from '../auth/services/auth-guard.service';

@NgModule({
    declarations : [
        ProductListComponent,
        ProductDetailComponent,
        ProductEntryComponent
    ],
    imports :[
        CommonModule,        
        HttpClientModule,     
        ProductRoutingModule        
    ],
    providers : [
        ProductService,
        AuthGuardService
    ]
})
export class ProductModule{
    constructor(){
        console.log("Product Module Loaded...");
    }
}