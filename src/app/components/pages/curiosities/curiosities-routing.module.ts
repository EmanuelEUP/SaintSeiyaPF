
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuriositiesComponent } from './curiosities.component';

const routes: Routes = [{ path: '', component: CuriositiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 

export class CuriositiesRoutingModule { }

