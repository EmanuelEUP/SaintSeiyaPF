import { Component, OnInit } from "@angular/core";
import {
  CHARACTERS_INTERFACE, 
} from "src/app/interfaces/interfaces";
import { SaintserviceService } from "src/app/services/saintservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  characterLoaded: boolean;
  characters: CHARACTERS_INTERFACE; 

  query: string;
  gender: string = ""; 

  constructor(
    private SaintserviceService: SaintserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.characterLoaded = false;
    this.getCharacters(); 
  }

  getCharacters(): void {
    this.SaintserviceService.getCharacters().subscribe(
      (data: CHARACTERS_INTERFACE) => {
        this.characters = data;
        if (this.characters) {
          this.characterLoaded = true;
        }
      }
    );
  }

  getCharactersDetail(id: any) {
    this.router.navigate(["/characters-detail"], {
      queryParams: { id: id, from: "characters" },
    });
  }
 

  searchEvent(search): void {
    if (search === "") {
      this.query = search;
    }
  }

  onGenderEvent(): void {}

  onClassesEvent(): void {}
}
