import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductService } from './product/services/product.service';
import { ProductEntryComponent } from './product/product-entry/product-entry.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './auth/authentication.service';
import { AuthGuardService } from './auth/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ProductDetailComponent,
    ProductEntryComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    AuthGuardService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
