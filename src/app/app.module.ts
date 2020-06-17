 
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';  
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

//trabajar con la autenticacion de firebase

import { ReactiveFormsModule } from '@angular/forms';

//para trabajar con forms reactivos con validaciones y sus directivas
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { EditPostModule } from './components/post/edit-post/edit-post.module';
import { NewPostComponent } from './components/post/new-post/new-post.component';
import { NewPostModule } from './components/post/new-post/new-post.module'; 
import { DetailsPostComponent } from './components/post/details-post/details-post.component';
import { LoginComponent } from './components/auth/login/login.component';

import { environment } from '../environments/environment';

/* Firebase */
 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'; //gestionar la subida de imagenes
import { AngularFireModule } from '@angular/fire'; //funciones o metodos de firebase
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    ContainerAppComponent,
    EditPostComponent,
    NewPostComponent,
    ToolbarComponent,
    FooterComponent,
    ModalComponent,
    DetailsPostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NewPostModule,
    ReactiveFormsModule,
    EditPostModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //inicializamos nuestra app con la config de firebase
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
