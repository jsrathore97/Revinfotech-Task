import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fname:any;
  lname:any
  gender:any="";
  Phone:any;
  email:any;
  accountNo:any;
  ifsc:any;
  notesVal:any;
  submitForm(){
    let data = {
      first_name : this.fname,
      last_name : this.lname,
      gender : this.gender,
      phone_number: this.Phone,
      email : this.email,
      account_no : this.accountNo,
      ifsc_code : this.ifsc,
      notes : this.notesVal 
    }
    console.log('Our Form Value Is ' , data);
    
  }




  
}
