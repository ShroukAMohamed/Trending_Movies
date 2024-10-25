import { Component } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private MoviesService:MoviesService){}
trendingMovies:any
trendingTv:any
trendingPeople:any
imgPrefix:string='https://image.tmdb.org/t/p/w500'

ngOnInit(): void {
  this.MoviesService.getTrending('movie').subscribe({
    next :(res :any)=>{
      this.trendingMovies = res.results.slice(0,10)
    } ,
    error : (err)=>{
      console.log(err);
    } ,
    complete : ()=>{

    }
  })
  this.MoviesService.getTrending('tv').subscribe({
    next :(res :any)=>{
      this.trendingTv = res.results.slice(0,10)
    } ,
    error : (err)=>{
      console.log(err);
    } ,
    complete : ()=>{

    }
  })
  this.MoviesService.getTrending('person').subscribe({
    next :(res :any)=>{
      this.trendingPeople = res.results.slice(0,10)
    } ,
    error : (err)=>{
      console.log(err);
    } ,
    complete : ()=>{

    }
  })
}
}
