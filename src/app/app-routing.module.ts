import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EditJobDetailsComponent } from './job-details/edit-job-details/edit-job-details.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ViewJobDetailsComponent } from './job-details/view-job-details/view-job-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditSkillSetComponent } from './skill-set/edit-skill-set/edit-skill-set.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ViewSkillSetComponent } from './skill-set/view-skill-set/view-skill-set.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "skill-set", component: SkillSetComponent },
  { path: "skill-set/view-skill-set", component: ViewSkillSetComponent },
  { path: "skill-set/edit-skill-set/:id", component: EditSkillSetComponent },
  { path: "job-details", component: JobDetailsComponent },
  { path: "job-details/view-job-details", component: ViewJobDetailsComponent },
  { path: "job-details/edit-job-details/:id", component: EditJobDetailsComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "page-not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
