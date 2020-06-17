import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersDetailRoutingModule} from './characters-detail-routing.module';
import {CharactersDetailComponent} from './characters-detail.component';

@NgModule({
  declarations: [CharactersDetailComponent],
  imports: [
    CommonModule,CharactersDetailRoutingModule
  ]
})
export class CharactersDetailModule { }

