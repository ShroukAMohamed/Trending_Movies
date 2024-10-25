import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  @Input() headerTrendingMovies:any = []
  constructor(){}
  imgSrc : string = `https://image.tmdb.org/t/p/w500/`;
  customOptions:OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    smartSpeed : 1000 ,
    autoplay : true ,
    autoplayTimeout  : 3000 ,
    fluidSpeed : true ,
    autoplayHoverPause : true ,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2.5
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      640: {
        items: 3.5
      },
      940: {
        items: 6.5
      }
    },
    nav: true,
    margin:20
  }
}
