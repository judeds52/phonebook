import { Component, OnInit } from '@angular/core';
import {ContactService} from '../shared/contact.service';
import {Contact} from '../shared/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-cont',
  templateUrl: './show-cont.component.html',
  styleUrls: ['./show-cont.component.scss'],
  providers:[ContactService]
})
export class ShowContComponent implements OnInit {

  constructor(private router: Router,private ContactService: ContactService) { }

  ngOnInit(){
    this.refreshContactList();
  }
  
  create(){
    this.router.navigateByUrl('/create');
}

refreshContactList(){
  this.ContactService.getContact().subscribe((res)=>{
    this.ContactService.contact= res as Contact[];
  })
}

edit(con : Contact){
  this.ContactService.useContact = {
    _id:con._id,
    PhoneNum: con.PhoneNum,
    email :con.email,
    Name: con.Name

  };
   console.log(con); 
  this.router.navigateByUrl(`/create:${con}`);

}

}
