import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ LoggingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
