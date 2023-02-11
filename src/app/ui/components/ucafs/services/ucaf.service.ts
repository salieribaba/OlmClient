import { Injectable } from '@angular/core';
import { ResponseModel } from 'src/app/common/components/blanc/models/response.model';
import { MessageResponseModel } from 'src/app/common/components/models/message-response.model';
import { GenericHttpService } from 'src/app/common/services/generic-http.service';
import { LoginResponseService } from 'src/app/common/services/login-response.service';
import { LoginResponseModel } from '../../auth/models/login-response-model';
import { RemoveByIdUcafModel } from '../models/remove-by-id-ucaf.model';
import { UcafModel } from '../models/ucaf-model';

@Injectable({
  providedIn: 'root'
})
export class UcafService {
  loginResponse: LoginResponseModel = new LoginResponseModel();

  constructor(private _http: GenericHttpService, private loginResponses: LoginResponseService) {
    this.loginResponse = loginResponses.getLoginResponseModel();
  }

  getAll(callBack: (res: ResponseModel<UcafModel[]>) => void) {
    let model = { companyId: this.loginResponse.company.companyId };
    this._http.post<ResponseModel<UcafModel[]>>("Ucafs/GetAllUcaf", model, res => callBack(res));
  }

  add(model: UcafModel, callBack: (res: MessageResponseModel) => void) {
    model.companyId = this.loginResponse.company.companyId;
    this._http.post<MessageResponseModel>("Ucafs/CreateUcaf", model, (res) => callBack(res));
  }

  removeById(model: RemoveByIdUcafModel, callBack: (res: MessageResponseModel) => void) {
    model.companyId = this.loginResponse.company.companyId;
    this._http.post<MessageResponseModel>("Ucafs/RemoveByIdUcaf", model, (res) => callBack(res));
  }

  update(model: UcafModel, callBack: (res: MessageResponseModel) => void) {
    model.companyId = this.loginResponse.company.companyId;
    this._http.post<MessageResponseModel>("Ucafs/UpdateUcaf", model, (res) => callBack(res));
  }

}
