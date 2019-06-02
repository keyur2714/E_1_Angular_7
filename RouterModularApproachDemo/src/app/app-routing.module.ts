import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-notfound.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEntryComponent } from './product/product-entry/product-entry.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'contactus' , component : ContactusComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent},
  {path : 'productDetail/:id' , component : ProductDetailComponent},
  {path : 'productEntry' , component : ProductEntryComponent},
  {path : '**' , component : PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Loaded...");
  }  
}
