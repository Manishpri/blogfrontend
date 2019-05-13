import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { BlogpostComponent } from './blogpost/blogpost/blogpost.component';
import { BannerComponent } from './banner/banner.component';





const appRoutes : Routes=[
  {path : 'login' , component:LoginComponent},
  {path : 'signup' , component:RegistrationComponent},
  {path : 'blog' , component:BlogpostComponent},
  {path : 'home' , component:BannerComponent},
  {path : 'signup', redirectTo : '/login' , pathMatch : 'full'}
  
  

]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
