import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { MyProductsComponent } from './Components/my-products/my-products.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewPhotosComponent } from './Components/view-photos/view-photos.component';
import { ViewViedoGallaryComponent } from './Components/view-viedo-gallary/view-viedo-gallary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonsinfoComponent } from './Components/personsinfo/personsinfo.component';
import { AngularMaterialModule } from './matMeterial.module';

const importcontrols=[
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpClientModule,
  AngularMaterialModule
]
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        DashboardComponent,
        SidenavComponent,
        ContactUsComponent,
        MyProductsComponent,
        LoginComponent,
        RegisterComponent,
        ViewPhotosComponent,
        ViewViedoGallaryComponent,
        PersonsinfoComponent,
    ],
    exports: [
        importcontrols
    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent],
    imports: [
        importcontrols,
    ]
})
export class AppModule { }
