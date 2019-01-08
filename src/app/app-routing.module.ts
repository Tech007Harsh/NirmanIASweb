import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../app/component/home/home.component";
import {EnquiryComponent} from "./component/enquiry/enquiry.component";
import {InsertenquiryComponent} from "./insertenquiry/insertenquiry.component";
const routes: Routes =[
  {path:"home",component:HomeComponent},
  // {path:"Menu",component:MenuComponent},
  {path:"Enquiry",component:EnquiryComponent},
  {path:"InsertEnquiry",component:InsertenquiryComponent},
  // {path:"Contact",component:ContactComponent},
  // {path:"Banner",component:BannerComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
