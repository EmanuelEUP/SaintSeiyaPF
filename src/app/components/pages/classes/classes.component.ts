import { Component, OnInit } from "@angular/core";
import {
  CHARACTERS_INTERFACE,
  CLASSES_NAMES_INTERFACE,
  CLASSES_INTERFACE
} from "src/app/interfaces/interfaces";
import { SaintserviceService } from "src/app/services/saintservice.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  characterLoaded: boolean; 
  classes: CLASSES_INTERFACE;
  classesNames: CLASSES_NAMES_INTERFACE;
  query: string;
  gender: string = "";
  classesfilter: string = "";

  constructor(
    private SaintserviceService: SaintserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.characterLoaded = false;
    this.getClasses();
    this.getClassesNames();
  }

  getClasses(): void {
    this.SaintserviceService.getClassesALL().subscribe(
      (data: CLASSES_INTERFACE) => {
        this.classes = data;
        if (this.classes) {
          this.characterLoaded = true;
        }
      }
    );
  }

  getCharactersDetail(id: any) {
    this.router.navigate(["/characters-detail"], {
      queryParams: { id: id, from: "classes" },
    });
  }

  getClassesNames(): void {
    this.SaintserviceService.getClassesNames().subscribe(
      (data: CLASSES_NAMES_INTERFACE) => {
        this.classesNames = data;
      }
    );
  }

  searchEvent(search): void {
    if (search === "") {
      this.query = search;
    }
  }

  onGenderEvent(): void {}

  onClassesEvent(): void {

    this.classes = null;
    this.characterLoaded = false;

    this.SaintserviceService.getClassesByType(this.classesfilter).subscribe(
      (data: CLASSES_INTERFACE) => {
        this.classes = data;

        if (this.classes) {
          this.characterLoaded = true;
        }
      }
    );    

  }
}
