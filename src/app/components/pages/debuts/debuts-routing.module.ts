import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebutsComponent } from './debuts.component';

const routes: Routes = [{ path: '', component: DebutsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebutsRoutingModule { }
