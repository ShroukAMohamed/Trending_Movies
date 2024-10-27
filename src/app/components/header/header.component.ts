import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('play') play:any
  @ViewChild('video') video:any
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  videoOne:string='assets/7988167-hd_1366_720_25fps.mp4'
  videoTwo:string='assets/7986770-hd_1366_720_25fps.mp4'
  @Input() headerTrendingMovies:any = []
  constructor(){}
  ngOnInit(){
    this.play?.click()
    this.play?.addEventListener('click', () => {
      this.video?.nativeElement.play();
  });
  }
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
