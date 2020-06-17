import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersComponent} from './characters.component';
import {CharactersRoutingModule} from './characters-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchCharacterPipe } from './../../../pipes/search-character.pipe';
import { GenderCharacterPipe } from './../../../pipes/gender-character.pipe';

@NgModule({
  declarations: [
    CharactersComponent,
    SearchCharacterPipe,
    GenderCharacterPipe
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    FormsModule
    
  ]
})
export class CharactersModule { }



 
