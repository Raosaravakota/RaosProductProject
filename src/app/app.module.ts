import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { MyProductsComponent } from './Components/my-products/my-products.component';
import { LoginComponent } from './Components/login/login.component';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from  '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { CondidatesinfoComponent } from './Components/condidatesinfo/condidatesinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewPhotosComponent } from './Components/view-photos/view-photos.component';

const importcontrols=[
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  // * MATERIAL IMPORTS
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,
  MatExpansionModule,
  HttpClientModule
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
    CondidatesinfoComponent,
    ViewPhotosComponent,
  ],
  imports: [
    importcontrols
  ],
  exports:[
    importcontrols
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
