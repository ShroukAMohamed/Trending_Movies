import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_KEY:string='c3b50760f1edf749586bf8cb9924fe2c'
  constructor(private HttpClient:HttpClient) {}
  getTrending(mediaType:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${this.API_KEY}`)
  }
  getMovieDetails(id:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}`)
  }
  getTvDetailes(tv_id:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${this.API_KEY}&language=en-US`)
  }
  getPeopleDetailes(people_id:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/person/${people_id}?api_key=${this.API_KEY}&language=en-US`)
  }
  getMoviesPageination(pageNumber:number):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`)
  }
  getTvPageination(pageNumber:number):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`)
  }
  Searching(keyword:string):Observable<any>{
    return this.HttpClient.get(`https://api.themoviedb.org/3/search/multi?query=${keyword}&api_key=${this.API_KEY}&include_adult=false&language=en-US&page=1`)
  }
}
