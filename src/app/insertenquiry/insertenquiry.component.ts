import { Component, OnInit } from '@angular/core';
import {EnquiryserviceService} from "../enquiryservice.service";
import {EnquiryModel} from "../enquiry-model";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-insertenquiry',
  templateUrl: './insertenquiry.component.html',
  styleUrls: ['./insertenquiry.component.css']
})
export class InsertenquiryComponent implements OnInit {

   enquiry = new EnquiryModel(1,'Harsh','abc@gmail.com',1234567890,'NothingAsked','NothingSaid',7,'Harsh','22/12/2018','Harsh','22/12/2018',true);
 
private result:any;
  constructor(private _service:EnquiryserviceService) { }

  ngOnInit(){ }
  onSubmit()
  {
    this._service.postEnquiry(this.enquiry).subscribe(
        result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log("Client Side Error....!");
        }else{
          console.log("Server Side Error   !");
        }
      })
    console.log(this.enquiry);
  }}
