import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
  public valid_fixedtop: boolean;
  public valid_bgcolor02: boolean;

  public href: string = "";

  constructor(private router: Router,public authSvc: AuthService) {}

  ngOnInit() { 
    this.fnc_navoptclick();
  }

  fnc_navoptclick(page:any = "") {
     
    if(page == ""){
      this.href = this.router.url; 
    }else{
      this.href = page.target.pathname;
    }

    if(this.href == "/home"){
      this.valid_fixedtop = true;
      this.valid_bgcolor02 = false;
    }else{
      this.valid_fixedtop = false;
      this.valid_bgcolor02 = true;

    }

  }

  onLogout(): void {
    this.authSvc.logout(); //para desloguearme
  }

}
