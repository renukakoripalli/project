import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-demo22',
  templateUrl: './demo22.component.html',
  styleUrls: ['./demo22.component.css']
})
export class Demo22Component implements OnInit {
list:Student[]=[];
sid:number;
sname:string;
age:number;
std:string;
item:Student;
stds:string[]=["I","II","III","IIII"]
val:boolean=true
  constructor() {
    this.list=[
      {sid:1,sname:'renu',std:'it',age:12},
               {sid:2,sname:'rani',std:'it',age:13},
             {sid:3,sname:'renuka',std:'it',age:14},
              {sid:4,sname:'vinee',std:'it',age:15},
             {sid:5,sname:'vineesha',std:'it',age:16},
              {sid:6,sname:'harika',std:'it',age:18}
  ]
   }

  ngOnInit() {
  }
 public Add()
 {
   this.item=new Student();
   this.item.sid=this.sid;
   this.item.sname=this.sname;
   this.item.std=this.std;
   this.item.age=this.age;
   this.list.push(this.item)
 }
 public SetVal()
 {
   this.val=!this.val;
 }
}
