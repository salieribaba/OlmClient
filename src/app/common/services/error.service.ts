import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService, ToastrType } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private _toastr: ToastrService) { }

  errorHandler(err: HttpErrorResponse) {
    switch (err.status) {
      case 0:
        this._toastr.toast(ToastrType.error, "Api adresine ulaşılamıyor", 'Hata!');
        break;
      case 400:
        this._toastr.toast(ToastrType.error, "Geçersiz istek", 'Hata!');
        break;
      case 401:
        this._toastr.toast(ToastrType.error, "Yetkisiz erişim", 'Hata!');
        break;
      case 403:
        this._toastr.toast(ToastrType.error, "Yetkisiz erişim", 'Hata!');
        break;
      case 404:
        this._toastr.toast(ToastrType.error, "Sayfa bulunamadı", 'Hata!');
        break;
      case 500:
        //api den dönen JSON formatlı mesajları dönüştür ve  toastr ile yaz
        if (err.error) {
          let errMessage = "";
          for (let key in err.error) {
            errMessage += err.error[key] + " ";
          }
          this._toastr.toast(ToastrType.error, errMessage, 'Hata!');
        }
        else {
          this._toastr.toast(ToastrType.error, "Sunucu hatası", 'Hata!');
        }
        break;
      default:
        console.log(err);
        break;
    }




  }
}
