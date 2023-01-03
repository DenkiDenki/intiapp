import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './common/app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { CareerObjectiveComponent } from './components/career-objective/career-objective.component';
import { ProfileTitleComponent } from './components/profile-title/profile-title.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideComponent } from './components/slide/slide.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SocialComponent } from './components/social/social.component';
import { CurvedRingCylindricalComponent } from './components/curved-ring-cylindrical/curved-ring-cylindrical.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ContactComponent,
    CareerObjectiveComponent,
    ProfileTitleComponent,
    ProjectsComponent,
    FooterComponent,
    SlideComponent,
    ContactFormComponent,
    SocialComponent,
    CurvedRingCylindricalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
