import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'transTabNamePipe'})
export class TransTabNamePipe implements PipeTransform {
    transform(str: string) {
        return str.toString().split(' ')[1].split('Component(')[0];
    }
}
