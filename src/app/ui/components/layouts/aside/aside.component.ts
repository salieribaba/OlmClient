import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginResponseModel } from '../../auth/models/login-response-model';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Navigations } from 'src/app/ui/router/navigation';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  @Input() loginResponse: LoginResponseModel = new LoginResponseModel();

  navigations = Navigations;







}
