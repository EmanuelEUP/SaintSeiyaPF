import { Component, OnInit } from "@angular/core";
import { DEBUTS_INTERFACE , CHARACTERS_INTERFACE} from "src/app/interfaces/interfaces";
import { SaintserviceService } from "src/app/services/saintservice.service";
import{Router} from '@angular/router'

@Component({
  selector: 'app-debuts',
  templateUrl: './debuts.component.html',
  styleUrls: ['./debuts.component.scss']
})
export class DebutsComponent implements OnInit {

  loading: boolean;
  debuts: DEBUTS_INTERFACE; 
  debutsSingle: DEBUTS_INTERFACE = null; 
  debutsCBB: DEBUTS_INTERFACE; 
  DebutsFilter: string = "";
  MidiaFilter: string = "";


  constructor(private SaintserviceService: SaintserviceService , private router: Router) {}

  ngOnInit() {
    this.loading = false; 
    this.getDebuts();

  }

  getDebuts(): void {

    this.debutsSingle = null;

    this.SaintserviceService.getDebuts().subscribe(
      (data: DEBUTS_INTERFACE) => {
        this.debuts = data;
        this.debutsCBB = data;

        if (this.debuts) {
          this.loading = true;
        }
      }
    );
  }
  
  onMidiaEvent(): void {}

  onDebutsEvent(): void {

    this.debuts = null;
    this.loading = false;

if(this.DebutsFilter == ""){

  this.getDebuts();

}else{

  this.SaintserviceService.getDebutsbyID(this.DebutsFilter).subscribe(
    (data: DEBUTS_INTERFACE) => {

      this.debutsSingle = data;
      if (this.debutsSingle) {
        this.loading = true;
      }
    }
  );    


}




  }  

  
}
