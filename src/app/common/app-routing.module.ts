import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from '../components/contact/contact.component';
import { ProjectsComponent } from '../components/projects/projects.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
