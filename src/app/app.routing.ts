import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { IraGalleryComponent } from './ira-gallery/ira-gallery.component';
import { DynamicpagecomponentComponent } from './shared/dynamicpagecomponent/dynamicpagecomponent.component';
import { AbstractSubmissionComponent } from './shared/abstract-submission/abstract-submission.component';
import { DynamicLandingComponent } from './shared/dynamic-landing/dynamic-landing.component';
import { EventMembersComponent } from './shared/event-members/event-members.component';
import { EventRegistrationComponent } from './shared/event-registration/event-registration.component';
import { SponsorAndExhibitorsComponent } from './shared/sponsor-and-exhibitors/sponsor-and-exhibitors.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { ScheduleItemComponent } from './shared/schedule-item/schedule-item.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ira-conferences', component: ConferencesComponent },
  { path: 'ira-gallery', component: IraGalleryComponent },
  // { path: 'user-profile', component: ProfileComponent },
  // { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sponsors-and-exhibitors', component: SponsorAndExhibitorsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
   //@ts-ignore
   { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) }, // Lazy-loaded Admin module
  { 
    path: ':pageName', 
    component: DynamicpagecomponentComponent,
    children: [
      { path: '', component: DynamicLandingComponent }, // Default child for pageName
      { path: 'abstract-submission', component: AbstractSubmissionComponent },
      { path: 'event-registration', component: EventRegistrationComponent },
      { path: 'event-members', component: EventMembersComponent },
      { path: 'scientific-program', component: ScheduleItemComponent }
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
