import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { CartComponent } from './components/cart/cart.component';
import { DescriptionComponent } from './components/description/description.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OfferComponent } from './components/offer/offer.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  // {path:'',redirectTo:'layout',pathMatch:'full'},
  {path:'',component:LayoutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"about",component:AboutComponent},
  {path:"offer",component:OfferComponent},
  {path:"product",component:ProductComponent},
  {path:"add-item",component:AddproductComponent},
  {path:"admin",component:AdminloginComponent},
  {path:'description/:title/:img/:des/:price',component:DescriptionComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
