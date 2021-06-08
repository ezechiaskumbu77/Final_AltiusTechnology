import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { CareersComponent } from './Components/careers/careers.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServicesComponent } from './Components/services/services.component';
import { AboutComponent } from './Components/about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './Components/footer/footer.component';
import {NgbAlertModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbModule, NgbProgressbarModule, NgbRatingModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogCandidatureComponent } from './Components/careers/candidature/dialog-candidature.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit';
import { MdbDropdownModule } from 'mdb-angular-ui-kit';
import { MdbValidationModule } from 'mdb-angular-ui-kit';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareersComponent,
    ContactComponent,
    DialogCandidatureComponent,
    FooterComponent,
    ServicesComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MdbModule,
    MdbScrollspyModule,
    MdbDropdownModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbDropdownModule,
    NgbRatingModule,
    NgbModalModule,

    NgbAlertModule,
    NgbTooltipModule,
    NgbProgressbarModule,
    NgbDatepickerModule,
  ],
  providers: [],
  entryComponents: [
    DialogCandidatureComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
