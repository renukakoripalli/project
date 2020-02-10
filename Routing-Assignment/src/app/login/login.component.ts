import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  errmsg:string
    constructor(private route:Router) { }
  
    ngOnInit() {
    }
    public Validate()
    {
      if (this.uname=="Renu"&& this.pwd=="12345") 
      {
        //set value in session
        sessionStorage.setItem("un",this.uname)
        this.route.navigateByUrl('buyer') //user is name of the route
      }
      else if(this.uname=="Rani"&&this.pwd=="123")
        {
          sessionStorage.setItem("un",this.uname)
        this.route.navigateByUrl('seller')

        }
        else if(this.uname=="jyo"&&this.pwd=="1234")
        {
          sessionStorage.setItem("un",this.uname)
        this.route.navigateByUrl('admin')
        }
      
      else{
        this.errmsg="invalid login credentials";
      }
    }
  
  }
  