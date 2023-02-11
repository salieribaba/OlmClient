import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucafPipe',
  standalone: true
})
export class UcafPipe implements PipeTransform {

  transform(value: any[], filterText: string): any[] {
    if (!filterText) {
      return value;
    }
    const code = value.filter((item: any) => item.code.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
    const name = value.filter((item: any) => item.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
    const type = value.filter((item: any) => item.type.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
    return code.concat(name).concat(type);



  }

}
