import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sega'
})
export class SegaFilter implements PipeTransform {
  transform(value: string, SelectedBaab: Object): string {
    switch (SelectedBaab) {
      case 1:
        value = value.replace(value.substring(0, 1), "ن").replace(value.substring(2, 3), "ص").replace(value.substring(4, 5), "ر");
        break;
      case 2:
      value = value.replace(value.substring(0, 1), "ض").replace(value.substring(2, 3), "ر").replace(value.substring(4, 5), "ب");
        break;
      case 3:
      value = value.replace(value.substring(0, 1), "س").replace(value.substring(2, 4), "مِ").replace(value.substring(4, 5), "ع");
        break;
      case 4:
      value = value.replace(value.substring(0, 1), "ف").replace(value.substring(2, 3), "ت").replace(value.substring(4, 5), "ح");
        break;
      case 5:
      value = value.replace(value.substring(0, 1), "ک").replace(value.substring(2, 4), "رُ").replace(value.substring(4, 5), "م");
        break;
      case 6:
      value = value.replace(value.substring(0, 1), "ح").replace(value.substring(2, 4), "سِ").replace(value.substring(4, 5), "ب");
        break;
      case 7:
      value = value.replace(value.substring(0, 1), "ف").replace(value.substring(2, 4), "ضِ").replace(value.substring(4, 5), "ل");
        break;
    }
    return value;
  }
}