import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoStrDir';
  Customer:any[]=[{"name":'Raj',"country":'India',"age":27},
                  {"name":'Renu',"country":'India',"age":23},
                  {"name":'jyo',"country":'India',"age":26}];
  StudentbyCountry:any[]=[{
    
    "country":"India","student":[{"name":"Jay","age":26},{"name":"Rani","age":22}] },
    {
"country":"us","student":[{"name":"Janu","age":25},{"name":"renu","age":22}]}]
    
    
    
  
    }
