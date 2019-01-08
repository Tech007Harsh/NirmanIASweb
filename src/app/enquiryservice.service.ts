import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { EnquiryModel } from './enquiry-model';
@Injectable()
export class EnquiryserviceService{
  constructor(private _http:HttpClient){}
  public getEnquiryInfo():any{
    return this._http.get("http://nias.codelovertechnology.com/api/Enquiry/EnquiryList");
  }

  public postEnquiry(Enq : EnquiryModel){
    return this._http.post<any>("http://nias.codelovertechnology.com/api/Enquiry/CreateEnquiry",Enq);
  }
 /* public updateEnquiry():any{
    return this._http.put("http://nias.codelovertechnology.com/api/Enquiry/UpdateEnquiry",{
      "CreatedBy":"Harsh"
    });*/
  };

