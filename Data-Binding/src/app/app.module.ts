import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Interpolation/demo/demo.component';
import { ViewComponent } from './Interpolation/view/view.component';
import { ViewCustomerComponent } from './Interpolation/view-customer/view-customer.component';
import { View1Component } from './property-Binding/view1/view1.component';
import { EventDemoComponent } from './Eventbinding/event-demo/event-demo.component';
//import { De4mo1Component } from './TwoWay-Binding/de4mo1/de4mo1.component';
import { Demo1Component } from './TwoWay-Binding/demo1/demo1.component';
import { Demo2Component } from './TwoWay-Binding/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewComponent,
    ViewCustomerComponent,
    View1Component,
    EventDemoComponent,
   // De4mo1Component,
    Demo1Component,
   Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Demo2Component]
})
export class AppModule { }
