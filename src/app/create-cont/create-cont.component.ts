import { Router } from '@angular/router';
import { Contact } from './../shared/contact.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ContactService} from '../shared/contact.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
declare var M : any;

@Component({
  selector: 'app-create-cont',
  templateUrl: './create-cont.component.html',
  styleUrls: ['./create-cont.component.scss'],
  providers:[ContactService]
})
export class CreateContComponent implements OnInit {
  visible:boolean;
  constructor(private fb:FormBuilder,private http:HttpClient,private ContactService: ContactService,private router: Router ) {
  }

    conForm:FormGroup;
  ngOnInit() {
    this.conForm=this.fb.group({
      _id : new FormControl("",Validators.required),
      Name: new FormControl("",Validators.required),
      PhoneNum: new FormControl("",[Validators.required,Validators.pattern('0-9')]),
      email: new FormControl("",Validators.email)
    })
    this.visible=false
    console.log(this.ContactService.useContact);
    this.refreshContactList();

  }

  get contactName(){
   return this.conForm.get('Name');
  }
  get Phone(){
    return this.conForm.get('PhoneNum')
  }
  get email(){
    return this.conForm.get('email');
  }
  
  onSubmit(form : NgForm){
    if(form.value._id==""){
    this.ContactService.postContact(form.value).subscribe((res)=>{
      M.toast({html: 'Contact Saved', classes: 'rounded'})
        console.log(form.value);
        this.visible=false;
        this.refreshContactList();
    })
  }
    else{
      console.log("here",form.value._id);
      this.ContactService.putContact(form.value).subscribe((res)=>{
        M.toast({html: 'Updated Contact', classes: 'rounded'})
          console.log(form.value);
          this.visible=false;
    })
  }
  }
  refreshContactList(){
    this.ContactService.getContact().subscribe((res)=>{
      this.ContactService.contact= res as Contact[];
    })
  }
  edit(con : Contact){
    this.visible=true;
    this.ContactService.useContact = con
  }  
  create(){
    this.ContactService.useContact={
      
        _id:"",
        PhoneNum:null,
        email :"",
        Name: ""
    
      }
    
    this.visible=true;
}
delete(del : String){
  if(confirm("Do You want to Delete this record")==true){
    console.log(del);
    this.ContactService.delContact(del).subscribe((res)=>{
      this.refreshContactList();
      M.toast({html: 'Deleted Contact', classes: 'rounded'})

    })
  }
}
Cancel(){
 
  this.visible=false;
}
}
