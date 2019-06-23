import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { PageNotFoundComponent } from './page-notfound.component';
import { ProductModule } from './product/product.module';
import { TokenInterceptorService } from './auth/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    HomeComponent,
    AboutusComponent,
    ContactusComponent,    
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,        
    FormsModule,
    HttpClientModule,    
    ProductModule,
    AppRoutingModule    
  ],
  providers: [        
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Loaded...");
  }  
}
