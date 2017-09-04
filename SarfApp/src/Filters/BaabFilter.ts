import { Pipe, PipeTransform } from '@angular/core';
import { Global } from "../Services/Global.service";

@Pipe({
    name: 'baab'
})
export class BaabFilter implements PipeTransform {
    constructor(public global: Global) { }
    transform(value: string, SelectedBaab: Object): string {
        if (value == undefined)
            return value;
        else {
            var baab = this.global.lstAbwab.filter(baab => baab.Id == SelectedBaab);
            return baab[0].Baab;
        }

    }
}