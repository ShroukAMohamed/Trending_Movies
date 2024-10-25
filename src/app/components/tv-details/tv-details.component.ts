import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.scss'
})
export class TvDetailsComponent {
  id:string = ''
  tvDetails:any = {}
  imgPrefix:string='https://image.tmdb.org/t/p/original'
  posterPrefix:string='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces'
  constructor( private ActivatedRoute:ActivatedRoute, private MoviesService:MoviesService){}
  ngOnInit(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.id = this.ActivatedRoute.snapshot.params['id']
    this.MoviesService.getTvDetailes(this.id).subscribe({
      next: (res => {
        this.tvDetails = res
        console.log(res)
      }),
      error: (err => {
        console.log(err)
      })
    })
  }
}
