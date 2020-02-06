import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  obj:Employee;
res:string;

  constructor() {
    this.obj=new Employee();
   }

  ngOnInit() {
  }
public Login(val:string,val1:string)
{
  
if((val=="Admin")&&(val1=="12345"))
 {
   this.res="login success";
 }
 else{
  this.res="login fail";
 }

 
}
}
