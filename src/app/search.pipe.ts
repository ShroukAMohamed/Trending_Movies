import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingMovies:any[], term:string): any[] {
    return trendingMovies.filter((movie)=>movie.title.toLowerCase().includes(term.toLowerCase()));
  }

}
