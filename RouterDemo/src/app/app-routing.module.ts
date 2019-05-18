import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEntryComponent } from './product/product-entry/product-entry.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'products' , component : ProductListComponent, canActivate : [AuthGuardService],
    children : [
      {
       path : 'detail/:id' , component : ProductDetailComponent
      }
    ]
  },
  {path : 'productDetail/:id' , component : ProductDetailComponent},
  {path : 'productEntry' , component : ProductEntryComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'contactus' , component : ContactusComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
