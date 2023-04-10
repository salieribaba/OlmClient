import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseModel } from 'src/app/ui/components/auth/models/login-response-model';
import { ErrorService } from './error.service';
import { LoginResponseService } from './login-response.service';
import jwt_decode from "jwt-decode";
import { AuthService } from 'src/app/ui/components/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {
  loginResponse: LoginResponseModel = new LoginResponseModel();

  apiUrl: string = "https://localhost:7137/api/";
  token: string = "";
  constructor(
    private _http: HttpClient,
    private loginResponses: LoginResponseService,
    private _error: ErrorService,
    private _auth: AuthService
  ) { }





  get<T>(api: string, callBack: (res: T) => void, authorize: boolean = true, diffApi: boolean = false) {
    this.getTokens();
    this._http.get<T>(`${this.setApi(diffApi, api)}`, this.setOptions(authorize)).subscribe({
      next: (res) => callBack(res),
      error: (err: HttpErrorResponse) => this._error.errorHandler(err)
    });
  }

  post<T>(api: string, model: any, callBack: (res: T) => void, authorize: boolean = true, diffApi: boolean = false) {
    this.getTokens();
    this._http.post<T>(`${this.setApi(diffApi, api)}`, model, this.setOptions(authorize)).subscribe({
      next: (res) => callBack(res),
      error: (err: HttpErrorResponse) => this._error.errorHandler(err)
    });
  }

  setApi(diffApi: boolean, api: string) {
    if (diffApi)
      return api;
    return this.apiUrl + api;
  }

  setOptions(authorize: boolean) {
    if (authorize)
      return { headers: { "Authorization": `Bearer ${this.token}` } }
    return {}
  }

  getTokens() {
    this.loginResponse = this.loginResponses.getLoginResponseModel();
    this.token = this.loginResponse.token.token;
    if (this.token != undefined && this.token != null && this.token != "") {
      var decoded: any = jwt_decode(this.token);
      let time = new Date().getTime() / 1000;
      if (decoded.exp <= time) {

      }
      else {
        this._auth.logout();
      }


    }
  }
}

