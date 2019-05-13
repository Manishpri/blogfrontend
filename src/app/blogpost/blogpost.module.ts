import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTimer } from 'ng2-simple-timer';


import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostComponent } from './blogpost/blogpost.component';

@NgModule({
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports: [
    BlogpostComponent
  ],
  declarations: [BlogpostComponent],
  providers: [SimpleTimer]

})
export class BlogpostModule { }
