import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { DetailsPostComponent } from './components/post/details-post/details-post.component';  
import { CharactersDetailComponent } from './components/pages/characters-detail/characters-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './../../src/app/shared/guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  //{path: 'admin',loadChildren: () =>import('./components/admin/admin.module').then(m => m.AdminModule)}, 
  {path: 'login', component: LoginComponent },  
  { 
    path: '',
    canActivate: [AuthGuard], 
    component: ContainerAppComponent,
    children: [
      { path: 'home',loadChildren: () =>   import('./components/pages/home/home.module').then(m => m.HomeModule)},
      //{ path: 'post/:id', component: DetailsPostComponent },
      { path: 'about',loadChildren: () => import('./components/pages/about/about.module').then( m => m.AboutModule)},
      { path: 'characters',loadChildren: () => import('./components/pages/characters/characters.module').then( m => m.CharactersModule)},
      { path: 'characters-detail',loadChildren: () => import('./components/pages/characters-detail/characters-detail.module').then( m => m.CharactersDetailModule)},
      { path: 'classes',loadChildren: () => import('./components/pages/classes/classes.module').then( m => m.ClassesModule)},
      { path: 'curiosities',loadChildren: () => import('./components/pages/curiosities/curiosities.module').then( m => m.CuriositiesModule)},
      { path: 'debuts',loadChildren: () => import('./components/pages/debuts/debuts.module').then( m => m.DebutsModule)},
     // { path: '', redirectTo: 'home',pathMatch: 'full'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
