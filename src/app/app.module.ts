
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { FileSelectDirective } from "ng2-file-upload";


//components
import { NavbarComponent } from './components//navbar/navbar.component';
import { PhonesListComponent } from './components//phones-list/phones-list.component';
import { PhonesDetailsComponent } from './components//phones-details/phones-details.component';
import { HomeComponent } from './components//home/home.component';
import { AddPhoneComponent } from './components//add-phone/add-phone.component';
import { LoginComponent } from './components//login/login.component';
import { SignupComponent } from './components//signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';


// Services
import { PhonesService } from './services/phones.service';
import { SessionService } from './services/session/session.service';


// ---
import {APP_BASE_HREF} from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhonesListComponent,
    PhonesDetailsComponent,
    HomeComponent,
    AddPhoneComponent,
    LoginComponent,
    FileSelectDirective,
    SignupComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // providers: [PhonesService, SessionService, {provide: APP_BASE_HREF, useValue: '/phoneappprod'}],
  providers: [PhonesService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
