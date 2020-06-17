import { Component, OnInit } from "@angular/core";
import { CURIOSITIES_INTERFACE , CHARACTERS_INTERFACE} from "src/app/interfaces/interfaces";
import { SaintserviceService } from "src/app/services/saintservice.service";
import{Router} from '@angular/router'

@Component({
  selector: 'app-curiosities',
  templateUrl: './curiosities.component.html',
  styleUrls: ['./curiosities.component.scss']
})
export class CuriositiesComponent implements OnInit {
  loading: boolean;
  curiosities: CURIOSITIES_INTERFACE;
  characters: CHARACTERS_INTERFACE;

  constructor(private SaintserviceService: SaintserviceService , private router: Router) {}

  ngOnInit() {
    this.loading = false;
    this.getCharacters();
    this.getCuriosities();

  }

  getCuriosities(): void {
    this.SaintserviceService.getCuriosities().subscribe(
      (data: CURIOSITIES_INTERFACE) => {
        this.curiosities = data;
        if (this.curiosities) {
          this.loading = true;
        }
      }
    );
  }

  getCharacters(): void {
        this.SaintserviceService.getCharacters().subscribe(
          (data: CHARACTERS_INTERFACE) => {
            this.characters = data;
            if (this.characters) {
              this.loading = true;
            }
          }
        );
      }


  getCharactersDetail(id: any) { 
    this.router.navigate(['/characters-detail'], { queryParams: { id: id , from:'curiosities'} }); 
  }

  
}
