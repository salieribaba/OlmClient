import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ValidInputDirective } from 'src/app/common/valid-input.directive';
import { LoadingButtonComponent } from "../../../../common/components/loading-button/loading-button.component";
import { AuthService } from '../services/auth.service';
import { ToastrService, ToastrType } from 'src/app/common/services/toastr.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ValidInputDirective, LoadingButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading: boolean = false;

  constructor(
    private _auth: AuthService
  ) { }



  login(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      this._auth.login(form.value);
    }
  }
}
