import { Component, OnInit } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from "ngx-gallery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  ngOnInit() {
    this.galleryOptions = [
      {
        width: "1100px",
        height: "600px",
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = [
      {
        small: "assets/img/galeria/1.jpg",
        medium: "assets/img/galeria/1.jpg",
        big: "assets/img/galeria/1.jpg",
      },
      {
        small: "assets/img/galeria/2.png",
        medium: "assets/img/galeria/2.png",
        big: "assets/img/galeria/2.png",
      },
      {
        small: "assets/img/galeria/3.png",
        medium: "assets/img/galeria/3.png",
        big: "assets/img/galeria/3.png",
      },
      {
        small: "assets/img/galeria/4.png",
        medium: "assets/img/galeria/4.png",
        big: "assets/img/galeria/4.png",
      },
      {
        small: "assets/img/galeria/5.png",
        medium: "assets/img/galeria/5.png",
        big: "assets/img/galeria/5.png",
      },      
    ];
  }
}
