import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoService } from 'src/app/common/services/crypto.service';
import { GenericHttpService } from 'src/app/common/services/generic-http.service';
import { LoginResponseModel } from '../models/login-response-model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api: string = " https://localhost:7137/api/Auth/Login";
  constructor(
    private _http: GenericHttpService,
    private _router: Router,
    private _crypto: CryptoService
  ) { }

  login(model: any) {
    this._http.post<LoginResponseModel>(this.api, model, res => {
      let cryptoValue = this._crypto.encrypto(JSON.stringify(res));
      localStorage.setItem("accessToken", cryptoValue);
      this._router.navigateByUrl("/");
    })
  }

  logout() {
    localStorage.removeItem('accessToken');
    this._router.navigateByUrl('/login');
  }
}
