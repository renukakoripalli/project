import { Component, OnInit } from '@angular/core';
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.css']
})
export class EventDemoComponent implements OnInit {
name:string;
Number:number;
Result:number;
  constructor() { }

  ngOnInit() {
  }


public setName()
{
this.name='Renuuuuuuuuuu';
}
public Greet(val:string)
{
  this.name=val;
}
public Add(n1:number,n2:number)
{
  this.Number=n1;
  this.Number=n2;
  this.Result=Number(n1)+Number(n2);
  return this.Result;

}
public Sub(n1:number,n2:number)
{
  this.Number=n1;
  this.Number=n2;
  this.Result=Number(n1)-Number(n2);
  return this.Result;
}

}
