import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private webApiUrl : string ="https://apiTest.com/users";
  constructor(private ht:HttpClient) { }

  getUserList():any{
    return this.ht.get(this.webApiUrl).toPromise().then(response=>response);
     
  }
  getUserById(id:any):any{
    return this.ht.get(this.webApiUrl +'/'+id).toPromise().then(response=>response);
  }

}
