import { Component,PLATFORM_ID,Inject, viewChild, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxLoader } from "ngx-http-loader";
import * as AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // view child navbar-collapse

  public loader = NgxLoader;
  title = 'Trending_movies';
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }


  // ngAfterViewInit() {
  //   AOS.init();
  // }
}
