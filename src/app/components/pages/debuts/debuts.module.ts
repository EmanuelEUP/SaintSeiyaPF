import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebutsRoutingModule } from './debuts-routing.module';
import { DebutsComponent } from './debuts.component';
import { FormsModule } from '@angular/forms';
import { MidiaDebutsPipe } from './../../../pipes/midia-debuts.pipe';

@NgModule({
  declarations: [DebutsComponent , MidiaDebutsPipe ],
  imports: [CommonModule, DebutsRoutingModule , FormsModule]
})

export class DebutsModule {}