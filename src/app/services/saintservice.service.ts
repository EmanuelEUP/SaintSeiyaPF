import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import {
  CHARACTERS_INTERFACE,
  CURIOSITIES_INTERFACE,
  CLASSES_NAMES_INTERFACE,
  CLASSES_INTERFACE,
  DEBUTS_INTERFACE
} from "src/app/interfaces/interfaces";
import { visitValue } from "@angular/compiler/src/util";

@Injectable({
  providedIn: "root",
})
export class SaintserviceService {
  CHARACTERS_ALL_API: any;
  CHARACTERS_ID_API: any;
  CURIOSIDADES_API: any;
  CLASSES_ALL_NAMES_API: any;
  CLASSES_ALL_API: any;
  CLASSES_SEVERAL_API: any;
  DEBUTS_ALL_API: any;
  DEBUTS_ID_API: any;

  constructor(private http: HttpClient) {
    this.CHARACTERS_ALL_API = environment.CHARACTERS_ALL_URL;
    this.CHARACTERS_ID_API = environment.CHARACTERS_ID_URL;
    this.CURIOSIDADES_API = environment.CURIOSIDADES_URL;
    this.CLASSES_ALL_NAMES_API = environment.CLASSES_ALL_NAMES_URL;
    this.CLASSES_ALL_API = environment.CLASSES_ALL_URL;
    this.CLASSES_SEVERAL_API = environment.CLASSES_SEVERAL_URL;
    this.DEBUTS_ALL_API = environment.DEBUTS_ALL_URL;
    this.DEBUTS_ID_API = environment.DEBUTS_ID_URL;
  }

  getCharacters(url: string = ""): Observable<CHARACTERS_INTERFACE> {
    if (url == "") {
      return this.http
        .get<CHARACTERS_INTERFACE>(`${this.CHARACTERS_ALL_API}`)
        .pipe(catchError(this._handleError));
    } else {
      return this.http
        .get<CHARACTERS_INTERFACE>(this.CHARACTERS_ID_API + `${url}`)
        .pipe(catchError(this._handleError));
    }
  }

  getCuriosities(): Observable<CURIOSITIES_INTERFACE> {
    return this.http
      .get<CURIOSITIES_INTERFACE>(`${this.CURIOSIDADES_API}`)
      .pipe(catchError(this._handleError));
  }

  getClassesNames(url: string = ""): Observable<CLASSES_NAMES_INTERFACE> {
    return this.http
      .get<CLASSES_NAMES_INTERFACE>(`${this.CLASSES_ALL_NAMES_API}`)
      .pipe(catchError(this._handleError));
  }

  getClassesALL(url: string = ""): Observable<CLASSES_INTERFACE> {
    return this.http
      .get<CLASSES_INTERFACE>(`${this.CLASSES_ALL_API}`)
      .pipe(catchError(this._handleError));
  }

  getClassesByType(tipo: string = ""): Observable<CLASSES_INTERFACE> {
    if (tipo == "") {
      return this.http
        .get<CLASSES_INTERFACE>(`${this.CLASSES_ALL_API}`)
        .pipe(catchError(this._handleError));
    } else {
      return this.http
        .get<CLASSES_INTERFACE>(
          `${this.CLASSES_SEVERAL_API}` + tipo.toLowerCase().replace(" ", "-")
        )
        .pipe(catchError(this._handleError));
    }
  }

  getDebuts(url: string = ""): Observable<DEBUTS_INTERFACE> {
    return this.http
      .get<DEBUTS_INTERFACE>(`${this.DEBUTS_ALL_API}`)
      .pipe(catchError(this._handleError));
  }  

  getDebutsbyID(id: string = ""): Observable<DEBUTS_INTERFACE> {

        if(id == ""){
          return this.http
          .get<DEBUTS_INTERFACE>(`${this.DEBUTS_ALL_API}`)
          .pipe(catchError(this._handleError));
        }else{
          return this.http
          .get<DEBUTS_INTERFACE>(`${this.DEBUTS_ID_API}` + id )
          .pipe(catchError(this._handleError));
          
        }

  }  

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
