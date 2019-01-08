import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { EnquiryComponent } from './component/enquiry/enquiry.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EnquiryserviceService} from "./enquiryservice.service";
import { InsertenquiryComponent } from './insertenquiry/insertenquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnquiryComponent,
    InsertenquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [EnquiryserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
