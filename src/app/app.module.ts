import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ViewJobDetailsComponent } from './job-details/view-job-details/view-job-details.component';
import { ViewSkillSetComponent } from './skill-set/view-skill-set/view-skill-set.component';
import { FormsModule } from '@angular/forms';
import { EditSkillSetComponent } from './skill-set/edit-skill-set/edit-skill-set.component';
import { EditJobDetailsComponent } from './job-details/edit-job-details/edit-job-details.component';

import { ViewSingleJobDetailsComponent } from './job-details/view-job-details/view-single-job-details/view-single-job-details.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

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
    
    ViewComponent,
    
    CreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
