import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyColorDirective } from './my-color.directive';
import { MyIfDirective } from './my-if.directive';
import { MyLoopDirective } from './my-loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyColorDirective,
    MyIfDirective,
    MyLoopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
