import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
item:Employee;
projectid:number;
projectname:string;
domain:string;
domains:string[]=["dotnet","java","testing"];
startdate:Date;
enddate:Date;
list:Employee[]=[];
  constructor() {
   
   }

  ngOnInit() {
  }
 public Add()
 {
   this.item=new Employee();
   this.item.projectid=this.projectid;
   this.item.projectname=this.projectname;
   this.item.domain=this.domain;
   this.item.startdate=this.startdate;
   this.item.enddate=this.enddate;
   this.list.push(this.item)
 }
}
