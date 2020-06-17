import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './../../post/post/post.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

/* Custom Hammer configuration */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pan': {
      direction: Hammer.DIRECTION_ALL,
    }
  }
}
/* End Custom hammer configuration */


/* Gallery */

import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [HomeComponent, PostComponent],
  imports: [
    CommonModule,
     HomeRoutingModule,
     NgxGalleryModule
    ],providers:[
      {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
    ]
})
export class HomeModule { }
