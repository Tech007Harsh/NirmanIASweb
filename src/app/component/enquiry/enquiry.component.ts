import { Component, OnInit } from '@angular/core';
import { EnquiryModel } from 'src/app/enquiry-model';
import {EnquiryserviceService} from "src/app/enquiryservice.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  private result:any;
   constructor(private _service:EnquiryserviceService) { }
 ngOnInit() {
     this._service.getEnquiryInfo().subscribe(res=>this.result=res);
     (err:HttpErrorResponse)=>{
       if(err.error instanceof Error){
         console.log("Server Side Error !");
   }else{
       console.log("Client Side Error   !");
   }
 }
 }}
