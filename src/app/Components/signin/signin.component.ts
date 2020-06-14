import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { ProfileComponent } from '../profile/profile.component';
import { Router } from '@angular/router';
declare var $:any
@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _Auth:AuthService , private router:Router) { }
success=false
sMessage=""
errormessage=false
flag;
eMessage=""

 signIn=new FormGroup({
   email:new FormControl('',[Validators.required,Validators.email]),
   password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)])
 })
 formData()
 {
   this.flag=true
   console.log(this.signIn)
   this._Auth.signIn(this.signIn.value).subscribe(response=>{
        if(response.message == "success")
        {
          localStorage.setItem("TOKEN",JSON.stringify(response.token))
          this.router.navigateByUrl('/mynotes');
         this.success=true;
         this.flag=false;
         this.sMessage=response.message;
        }
      else
      {
        this.errormessage=true
       this.eMessage=response.message
       console.log(response)
      }

   })

 }
  ngOnInit() {
    $('#signIn').particleground();
  }

}
