import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    EducationDetailComponent,
    SkillDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
