import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
declare var $:any
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
currentPage = 0
trendingMovies:any
imgPrefix:string='https://image.tmdb.org/t/p/w500'
pages:number[] = []
pageNumbers:number = 10
constructor(private MoviesService:MoviesService){

}
ngOnInit() {
  this.pages = new Array(this.pageNumbers).fill("").map( (x,i)=> i+1);
  this.MoviesService.getMoviesPageination(1).subscribe({
    next:(res) =>{
      this.trendingMovies = res.results
      console.log(res.results)
    },
    error: (err) => {
      console.log(err)
    }
  })
}
pageCall(pageNumbers:number) {
  this.MoviesService.getMoviesPageination(pageNumbers).subscribe({
    next:(res) =>{
      this.trendingMovies = res.results
      console.log(res.results)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    error: (err) => {
      console.log(err)
    }
  })
}
activeBtn(index:any){
  this.currentPage = index
  console.log(index);
}
decreasePage(){
if(this.currentPage != 0){
  this.currentPage -= 1
  this.activeBtn(this.currentPage)
  this.pageCall(this.currentPage + 1)
}
}
increasePage(){
  if(this.currentPage != 9){
    this.currentPage += 1
    this.activeBtn(this.currentPage)
    this.pageCall(this.currentPage + 1)
  }
}
}
