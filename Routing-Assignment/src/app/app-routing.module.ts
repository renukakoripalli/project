import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { BuyItemComponent } from './buy-item/buy-item.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewCart1Component } from './view-cart1/view-cart1.component';
import { AdditemsComponent } from './additems/additems.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddremovebuyerComponent } from './addremovebuyer/addremovebuyer.component';
import { AddremovesellerComponent } from './addremoveseller/addremoveseller.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'buyer',component:BuyerComponent,children:[
    {path:'buyitem',component:BuyItemComponent},
    {path:'viewcart',component:ViewCartComponent},
    {path:'payment',component:PaymentComponent},

  ]},
  {path:'seller',component:SellerComponent,children:[
  {path:'additems',component:AdditemsComponent},
  {path:'viewcart1',component:ViewCart1Component},
  ]},
  {path:'admin',component:AdminComponent,children:[
    {path:'addcategory',component:AddcategoryComponent},
    {path:'addremovebuyer',component:AddremovebuyerComponent},
    {path:'addremoveseller',component:AddremovesellerComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
