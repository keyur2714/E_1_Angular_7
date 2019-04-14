import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InquiryEntryComponent } from './inquiry-entry/inquiry-entry.component';
import { CourseEntryComponent } from './course-entry/course-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    InquiryEntryComponent,
    CourseEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
