import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ClassesComponent} from './classes.component';
import{ClassesRoutingModule} from './classes-routing.module'; 
import { FormsModule } from '@angular/forms';
import { SearchClassesPipe } from './../../../pipes/search-classes.pipe';

@NgModule({
  declarations: [
    ClassesComponent,
    SearchClassesPipe
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    FormsModule
  ]
})
export class ClassesModule { }

