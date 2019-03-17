import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MyGridComponent } from './my-grid/my-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegistrationComponent,
    MyDropdownComponent,
    EmployeeListComponent,
    ProductListComponent,
    MyGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
