import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success-msg/success-message.component';
import { FailureMessage } from './failure-msg/failure-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    FailureMessage
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [SuccessComponent,FailureMessage]
  bootstrap:[AppComponent]
})
export class AppModule { }
