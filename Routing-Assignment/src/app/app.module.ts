import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BuyItemComponent } from './buy-item/buy-item.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdditemsComponent } from './additems/additems.component';
import { ViewCart1Component } from './view-cart1/view-cart1.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddremovebuyerComponent } from './addremovebuyer/addremovebuyer.component';
import { AddremovesellerComponent } from './addremoveseller/addremoveseller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyerComponent,
    SellerComponent,
    AdminComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BuyItemComponent,
    ViewCartComponent,
    PaymentComponent,
    AdditemsComponent,
    ViewCart1Component,
    AddcategoryComponent,
    AddremovebuyerComponent,
    AddremovesellerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
