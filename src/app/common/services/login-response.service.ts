import { Injectable } from '@angular/core';
import { LoginResponseModel } from 'src/app/ui/components/auth/models/login-response-model';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class LoginResponseService {



  loginResponse: LoginResponseModel = new LoginResponseModel();
  constructor(private _crypto: CryptoService) {
    let token = localStorage.getItem('accessToken')?.toString();
    if (token != undefined) {
      let loginResponsestring = this._crypto.decrypto(token);
      this.loginResponse = JSON.parse(loginResponsestring);
    }
  }

  getLoginResponseModel() {
    return this.loginResponse;
  }
}
