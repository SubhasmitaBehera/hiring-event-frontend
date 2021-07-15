import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ViewJobDetailsComponent } from './job-details/view-job-details/view-job-details.component';
import { ViewSkillSetComponent } from './skill-set/view-skill-set/view-skill-set.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditSkillSetComponent } from './skill-set/edit-skill-set/edit-skill-set.component';
import { EditJobDetailsComponent } from './job-details/edit-job-details/edit-job-details.component';
import { ViewSingleJobDetailsComponent } from './job-details/view-job-details/view-single-job-details/view-single-job-details.component';
import { ViewSingleSkillSetComponent } from './skill-set/view-skill-set/view-single-skill-set/view-single-skill-set.component';
import { JobdetailsSkillsetMappingComponent } from './jobdetails-skillset-mapping/jobdetails-skillset-mapping.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ViewUserInfoComponent } from './user-info/view-user-info/view-user-info.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { ViewInterviewDetailsComponent } from './interview-details/view-interview-details/view-interview-details.component';
import { ViewSingleInterviewDetailsComponent } from './interview-details/view-single-interview-details/view-single-interview-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobDetailsComponent,
    SkillSetComponent,
    HomeComponent,
    ViewJobDetailsComponent,
    ViewSkillSetComponent,
    EditSkillSetComponent,
    EditJobDetailsComponent,
    ViewSingleJobDetailsComponent,
    ViewSingleSkillSetComponent,
    JobdetailsSkillsetMappingComponent,
    UserInfoComponent,
    ViewUserInfoComponent,
    InterviewDetailsComponent,
    ViewInterviewDetailsComponent,
    ViewSingleInterviewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
