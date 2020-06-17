import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CuriositiesComponent} from './curiosities.component';
import {CuriositiesRoutingModule} from './curiosities-routing.module';
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    CuriositiesComponent, 
  ],
  imports: [
    CommonModule,
    CuriositiesRoutingModule,
    FormsModule
  ]
})
export class CuriositiesModule { }

