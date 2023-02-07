import { CompanyDto } from "./company-model";
import { TokenRefreshTokenDto } from "./token-model";

export class LoginResponseModel {
  token: TokenRefreshTokenDto = new TokenRefreshTokenDto();
  email: string = "";
  userId: string = "";
  nameLastName: string = "";
  companies: CompanyDto[] = [];
  year: number = new Date().getFullYear();
  company: CompanyDto = new CompanyDto();

}



