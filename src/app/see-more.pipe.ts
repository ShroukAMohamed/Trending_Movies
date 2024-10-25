import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(overview:string,limit:number): string {
    return overview?.split(' ').slice(0,limit).join(' ')
  }

}
