import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callSwal(title: string, text: string, callBack: () => void) {
    Swal.fire({
      showCloseButton: true,
      showConfirmButton: true,
      closeButtonHtml: '<i class="fa fa-times"></i>',
      confirmButtonText: 'Tamam',
      text: text,
      icon: "question",
      title: title,
      showCancelButton: true,
      cancelButtonText: "İptal",
    }).then((result) => {
      if (result.value) {
        if (result.isConfirmed)
          callBack();
      }
    });
  }

}
