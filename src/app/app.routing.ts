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

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'ira-conferences',             component: ConferencesComponent },
    { path: 'ira-gallery',             component: IraGalleryComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'register',           component: SignupComponent },
    { path: '',          component: LandingComponent },
    // { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
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
