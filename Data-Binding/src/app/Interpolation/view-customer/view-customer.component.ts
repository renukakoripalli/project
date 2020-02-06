import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
//import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
obj:Customer;
  constructor() {
    this.obj={Cname:'renuka',Email:"k@gmail.com",Mobile:9133807218,City:"Hyderabad",Address:"Madapur"}
   }

  ngOnInit() {
  }

}
