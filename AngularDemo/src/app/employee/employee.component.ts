import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
firstName:string="Renu";
lastName:string="Koripalli";
Email:string="Renu@gmail.com"
Age:number=21;
 
  }
