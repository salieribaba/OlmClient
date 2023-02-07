import { Injectable } from '@angular/core';
declare var toastr: any;


@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  toast(type: ToastrType, message: string, title: string) {

    switch (type) {
      case ToastrType.success:
        toastr.success(message, title)
        break;
      case ToastrType.info:
        toastr.info(message, title)
        break;
      case ToastrType.error:
        toastr.error(message, title)
        break;
      case ToastrType.warning:
        toastr.warning(message, title)
        break;

      default:
        break;
    }
  }
}

export enum ToastrType {
  success = 'success',
  info = 'info',
  error = 'error',
  warning = 'warning'

}
