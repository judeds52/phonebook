import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  useContact : Contact = {
    _id:"",
    PhoneNum: null,
    email :"",
    Name: ""

  };
  contact: Contact[];
  baseURL= 'http://localhost:5050';

  constructor(private http:HttpClient) { }

  postContact(pos : Contact){
    return this.http.post(`${this.baseURL}/create`, pos);
  }  

  getContact(){
    return this.http.get(this.baseURL);
  }

  putContact(upd : Contact){
    console.log(upd._id);
    return this.http.put(`${this.baseURL}/update/${upd._id}`,upd);
  }
  delContact(del : String){
    return this.http.delete(`${this.baseURL}/delete/${del}`);
  }
}
