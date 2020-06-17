import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SaintserviceService } from "src/app/services/saintservice.service";
import { CHARACTERS_INTERFACE } from "src/app/interfaces/interfaces";
import { from } from "rxjs";

@Component({
  selector: "app-characters-detail",
  templateUrl: "./characters-detail.component.html",
  styleUrls: ["./characters-detail.component.scss"],
})
export class CharactersDetailComponent implements OnInit {
  volverURL: string;
  idCharacter: string;
  characters: CHARACTERS_INTERFACE;
  characterLoaded: boolean;

  constructor(
    private route: ActivatedRoute,
    private SaintserviceService: SaintserviceService
  ) {}

  ngOnInit() {
    this.idCharacter = this.route.snapshot.queryParamMap.get("id");
    this.characterLoaded = false;

    switch (this.route.snapshot.queryParamMap.get("from")) {
      case "characters":
        this.volverURL = "/characters";
        break;

      case "curiosities":
        this.volverURL = "/curiosities";
        break;

      case "classes":
        this.volverURL = "/classes";
        break;
    }

    this.getCharactersDetail(this.idCharacter);
  }

  getCharactersDetail(id: any) {
    this.SaintserviceService.getCharacters(id).subscribe(
      (data: CHARACTERS_INTERFACE) => {
        this.characters = data;
        if (this.characters) {
          this.characterLoaded = true;
        }
      }
    );
  }
}
