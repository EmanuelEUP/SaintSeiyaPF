import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../shared/services/auth.service";
import { UserI } from "../../../shared/models/user";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  blnError: Boolean;
  msgError:string;

  constructor(private authSvc: AuthService, private route: Router) {}

  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  ngOnInit() {
    this.blnError = false;
    this.msgError = "";

    this.authSvc.logout(); //para desloguearme
  }

  onLogin(form: UserI) { 
    this.authSvc
      .loginByEmail(form)
      .then((res) => {
        console.log("Successfully", res);
        this.blnError = false;
        this.route.navigate(["home/"]);
      })
      .catch((err) => {
        console.log("Error", err);
        this.msgError = err.message;
        this.blnError = true;

      });
  }
}
