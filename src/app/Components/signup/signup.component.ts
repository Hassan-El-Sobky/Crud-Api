import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

declare var $:any;
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _Auth:AuthService) { }
  isCliked=true;
  resMessage=""
  mSuccess=false
  unique=false;
  uniqueEmail=""
signUp= new FormGroup({
  first_name:new FormControl('',[Validators.required,Validators.pattern(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}/)]),
  last_name:new FormControl('',[Validators.required,Validators.pattern(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}/)]),
  age:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email,]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
})
formData()
{
  this.isCliked=false
  
  this._Auth.signUp(this.signUp.value).subscribe(response=>{
    console.log(response);
    if(response.message=="success")
    {
      this.signUp.reset();
      this.isCliked=true;
      this.unique=false;
      setInterval(function(){
      this.isCliked=false
      },1000)
      this.resMessage=response.message
      this.mSuccess=true
    }
    else
    {
      this.unique=true;
       this.uniqueEmail=response.errors.email.message;
    }
  });
}
  ngOnInit() {
    $('#signUp').particleground();
  }

}
