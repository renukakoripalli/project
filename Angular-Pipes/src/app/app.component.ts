import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Pipes';
  tittle='angular pipes'
  price:number=120;DOB:Date=new Date(2019,3,3)
}
