import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatesinfoComponent } from './Components/condidatesinfo/condidatesinfo.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyProductsComponent } from './Components/my-products/my-products.component';
import { RegisterComponent } from './Components/register/register.component';
import { RegistrationFromComponent } from './Components/registration-from/registration-from.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path:'contactus',component:ContactUsComponent},
  {path:'myProducts',component:MyProductsComponent},
  { path:'login',component:LoginComponent},
  {path:'registrationForm',component:RegistrationFromComponent},
  {path:'register',component:RegisterComponent},
  {path:'candidatesInfo', component:CondidatesinfoComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
