import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersDetailComponent } from './characters-detail.component';

const routes: Routes = [{ path: '', component: CharactersDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersDetailRoutingModule { }