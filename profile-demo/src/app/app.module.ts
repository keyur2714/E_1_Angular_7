import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    EducationDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
