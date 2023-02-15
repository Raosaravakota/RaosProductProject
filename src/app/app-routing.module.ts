import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyProductsComponent } from './Components/my-products/my-products.component';
import { PersonsinfoComponent } from './Components/personsinfo/personsinfo.component';
import { RegisterComponent } from './Components/register/register.component';
import { ViewPhotosComponent } from './Components/view-photos/view-photos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contactus',component:ContactUsComponent},
  { path: 'myProducts',component:MyProductsComponent},
  { path: 'login',component:LoginComponent},
  { path: 'register',component:RegisterComponent},
  {path:'personsInfo',component:PersonsinfoComponent},
  { path:'dashboard/viewPhotos', component:ViewPhotosComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
