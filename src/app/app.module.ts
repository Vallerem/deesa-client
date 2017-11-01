import { ProductService } from './services/product.service';
import { CommentService } from './services/comment.service';

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
import { DesignService } from './services/design.service';
import { UserService } from './services/user.service';


// ---
import {APP_BASE_HREF} from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { AccountComponent } from './components/account/account.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { DesignsListComponent } from './components/designs-list/designs-list.component';
import { DesignsItemComponent } from './components/designs-item/designs-item.component';
import { DesignsWrapperComponent } from './components/designs-wrapper/designs-wrapper.component';
import { DesignInfoComponent } from './components/design-info/design-info.component';
import { AllDesignsWrapperComponent } from './components/all-designs-wrapper/all-designs-wrapper.component';
import { DesignNewWrapperComponent } from './components/design-new-wrapper/design-new-wrapper.component';
import { DesignNewFormComponent } from './components/design-new-form/design-new-form.component';
import { CommentBoxComponent } from './components/comments/comment-box/comment-box.component';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { CommentListComponent } from './components/comments/comment-list/comment-list.component';
import { CommentWrapperComponent } from './components/comments/comment-wrapper/comment-wrapper.component';
import { ProductWrapperComponent } from './components/product-wrapper/product-wrapper.component';
import { ProductItemComponent } from './components/product-item/product-item.component';


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
    LayoutComponent,
    AccountComponent,
    AccountInfoComponent,
    UserWrapperComponent,
    UserInfoComponent,
    DesignsListComponent,
    DesignsItemComponent,
    DesignsWrapperComponent,
    DesignInfoComponent,
    AllDesignsWrapperComponent,
    DesignNewWrapperComponent,
    DesignNewFormComponent,
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentWrapperComponent,
    ProductWrapperComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // providers: [PhonesService, SessionService, {provide: APP_BASE_HREF, useValue: '/phoneappprod'}],
  providers: [PhonesService, SessionService, UserService, DesignService,CommentService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
