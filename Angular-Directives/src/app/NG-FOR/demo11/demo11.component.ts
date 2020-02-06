import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.css']
})
export class Demo11Component implements OnInit {
no:number[]=[12,23,34,45,56]
name:string[]=["renu","rani","vinee","harika"]
  constructor() {
    this.name.push("Komal")
   }

  ngOnInit() {
  }

}
