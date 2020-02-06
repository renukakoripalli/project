import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  item:Customer;
  constructor() {
    this.item =new Customer;
    this.item.Cname="renuka";
    this.item.City="hyd";
    this.item.Address="ammerpet";
    this.item.Email="k@gmail.com";
    this.item.Mobile=123654789;
    
   }

  ngOnInit() {
  }

}
