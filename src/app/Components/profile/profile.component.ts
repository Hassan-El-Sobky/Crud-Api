import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Data=[{title:"My note",body:"your note body "}]

  constructor(private router:Router) {
  
if(! localStorage.getItem('TOKEN'))
{
  router.navigateByUrl("/signin");
   
}
   }
 
  ngOnInit() {
  }
  
  saved(title,content)
{
  let note={title:title,body:content};
  this.Data.push(note);
  localStorage.setItem("Data",JSON.stringify(this.Data))
}




}
