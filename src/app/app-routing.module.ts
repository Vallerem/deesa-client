import { AccountInfoComponent } from './components/account-info/account-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PhonesListComponent } from './components/phones-list/phones-list.component';
import { PhonesDetailsComponent } from './components/phones-details/phones-details.component';
import { AddPhoneComponent } from './components/add-phone/add-phone.component';
import { SignupComponent } from "./components/signup/signup.component";
import { AccountComponent } from './components/account/account.component';
import { LayoutComponent } from './components/layout/layout.component';

import { SessionService } from './services/session/session.service';

const routes: Routes = [
  { path: '', component: LayoutComponent,
children: [
   { path: '', component: HomeComponent },
   { path: 'phones', component: PhonesListComponent, canActivate: [SessionService], pathMatch: 'full', },
   { path: 'phones/new', component: AddPhoneComponent, canActivate: [SessionService], pathMatch: 'full', },
   { path: 'phones/:id', component: PhonesDetailsComponent, canActivate: [SessionService], pathMatch: 'full', }
] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent, pathMatch: 'full', },
  { path: 'account', component: AccountComponent, canActivate: [SessionService],
   children: [
    { path: '', canActivate: [SessionService], component: AccountInfoComponent },
    { path: 'password', canActivate: [SessionService], component: AccountInfoComponent ,pathMatch: 'full'},
    { path: 'address', canActivate: [SessionService], component: AccountInfoComponent },
    { path: 'designer', canActivate: [SessionService], component: AccountInfoComponent },

  ] },
  { path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
