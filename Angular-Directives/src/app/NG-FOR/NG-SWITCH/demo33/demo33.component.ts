import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo33',
  templateUrl: './demo33.component.html',
  styleUrls: ['./demo33.component.css']
})
export class Demo33Component implements OnInit {
items:any[]=[
  {name:'one',val:1},
  {name:'two',val:2},
  {name:'three',val:3}
];
selectedValue:string='one';
  constructor() { }

  ngOnInit() {
  }

}
