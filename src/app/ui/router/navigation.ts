export class Navigation {
  routerLink: string = '';
  name: string = '';
  icon: string = '';
}

export const Navigations: Navigation[] = [
  {
    routerLink: '/',
    name: 'Anasayfa',
    icon: 'fa fa-home '
  },
  {
    routerLink: '/ucafs',
    name: 'Hesap Planı',
    icon: 'fa fa-file-signature'
  }

];
