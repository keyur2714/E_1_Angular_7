import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegistrationComponent,
    MyDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
