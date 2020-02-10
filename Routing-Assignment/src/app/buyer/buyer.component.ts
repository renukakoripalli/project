import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  uname:string;
  constructor(private route:Router) {
    if(sessionStorage.getItem("un"))
    {

    
    //read session storage
    this.uname=sessionStorage.getItem("un");
    console.log(this.uname)
   }
   else{
     this.route.navigateByUrl('login')
   }
  }

  ngOnInit() {
  }
  public Logout()
  {
    //clear session data
    sessionStorage.clear();
    this.route.navigate(['login']);
    //this.route.navigateByUrl('login')
  }

}