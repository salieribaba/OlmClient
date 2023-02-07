import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from 'src/app/common/components/blanc/section/section.component';
import { NavModel } from 'src/app/common/components/blanc/models/nav.model';
import { BlankComponent } from 'src/app/common/components/blanc/blank.component';

@Component({
  selector: 'app-ucafs',
  standalone: true,
  imports: [CommonModule, BlankComponent, SectionComponent],
  templateUrl: './ucafs.component.html',
  styleUrls: ['./ucafs.component.css']
})
export class UcafsComponent {
  navs: NavModel[] = [
    { routerLink: '/', name: 'Anasayfa', class: '' },
    { routerLink: '/ucafs', name: 'Hesap Planı', class: 'active' },
  ]

}
