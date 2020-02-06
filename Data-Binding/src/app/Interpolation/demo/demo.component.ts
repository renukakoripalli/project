import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
name:string="Renu";
class:string="ii";
age:number=12;
  constructor() { }

  ngOnInit() {
  }

}
