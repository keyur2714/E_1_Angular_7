import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { MaskPipe } from './mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    MaskPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
