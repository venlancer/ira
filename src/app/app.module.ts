import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { IconBlockComponent } from './shared/icon-block/icon-block.component';
import { PastCuroselComponent } from './shared/past-curosel/past-curosel.component';
import { OurTeamComponent } from './shared/our-team/our-team.component';
import { DesignSystemComponent } from './shared/design-system/design-system.component';
import { CompanyInfoCardsComponent } from './shared/company-info-cards/company-info-cards.component';
import { EventCardsComponent } from './shared/event-cards/event-cards.component';
import { IraTabsComponent } from './shared/ira-tabs/ira-tabs.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { IraGalleryComponent } from './ira-gallery/ira-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    IconBlockComponent,
    PastCuroselComponent,
    OurTeamComponent,
    DesignSystemComponent,
    CompanyInfoCardsComponent,
    EventCardsComponent,
    IraTabsComponent,
    ConferencesComponent,
    IraGalleryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
