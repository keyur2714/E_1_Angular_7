import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuardService } from '../auth/services/auth-guard.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
const routes : Routes = [
    {
        path : 'products' , component : ProductListComponent, canActivate : [AuthGuardService],
        canActivateChild : [AuthGuardService],
        children : [
          {
           path : 'detail/:id' , component : ProductDetailComponent
          }
        ]
    }    
];
@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class ProductRoutingModule {
    constructor(){
        console.log("Product Routing Module Loaded...");
      }
}