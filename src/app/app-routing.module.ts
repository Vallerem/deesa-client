import { CartWrapperComponent } from './components/cart/cart-wrapper/cart-wrapper.component';
import { AllDesignsWrapperComponent } from './components/all-designs-wrapper/all-designs-wrapper.component';
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
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { DesignsWrapperComponent } from './components/designs-wrapper/designs-wrapper.component';
import { DesignNewWrapperComponent } from './components/design-new-wrapper/design-new-wrapper.component';
import { BuyItemWrapperComponent } from './components/buy-item-wrapper/buy-item-wrapper.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
children: [
   { path: '', component: HomeComponent },
   { path: 'phones', component: PhonesListComponent, canActivate: [SessionService], pathMatch: 'full', },
   { path: 'phones/new', component: AddPhoneComponent, canActivate: [SessionService], pathMatch: 'full', },
   { path: 'phones/:id', component: PhonesDetailsComponent, canActivate: [SessionService], pathMatch: 'full', },
   { path: 'account', component: AccountComponent, canActivate: [SessionService]},
   { path: 'designs', component: AllDesignsWrapperComponent},
   { path: 'designs/view/:idDesign', component: DesignsWrapperComponent, canActivate: [SessionService]},
   { path: 'designs/new', component: DesignNewWrapperComponent, canActivate: [SessionService]},
   { path: 'designs/:username', component: UserWrapperComponent, canActivate: [SessionService]},
   { path: 'designs/view/:idDesign/product/:productName', component: BuyItemWrapperComponent, canActivate: [SessionService]},
   { path: 'cart', component: CartWrapperComponent, canActivate: [SessionService]},

] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent, pathMatch: 'full', },
  { path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
