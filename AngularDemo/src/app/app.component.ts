import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = null;
  num:number=20;
  imagepath:string='assets/Images/msd.jpg'
  imagepath1:string='assets/Images/msd2.jpg'
  imagepath2:string='assets/Images/msd3.jpg'
  imagepath3:string='assets/Images/msd4.jpg'
  imagepath4:string='assets/Images/msd5.jpg'
  fname:string="ram";
  lname:string="k";
  isdisabled:boolean=false;
  getname():string{
    this.fname=this.fname.toUpperCase()
    return this.fname+" "+this.lname;
  }
}
