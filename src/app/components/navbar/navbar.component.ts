import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { MoviesService } from '../../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
isLogin:boolean = false
@ViewChild('navbar') navbar:any
term:string=''
results:any=[]
imgPrefix:string='https://image.tmdb.org/t/p/w500'
  constructor(private AuthService:AuthService , private MoviesService:MoviesService, private router: Router){
    this.router.events.subscribe(() => {
      this.closeNavbar();
    });
  }
  closeNavbar() {
    if (this.navbar) {
      this.navbar.nativeElement.classList.remove('show');
    }
  }
  ngOnInit():void {
    this.AuthService.token.subscribe(() => {
      if (typeof localStorage !== 'undefined') {
      const local = localStorage.getItem('userToken')
      if( local != null) {
        this.isLogin = true
      }else {
        this.isLogin = false
      }
    }
    })
  }
  SearchData(keyword:string){
    this.MoviesService.Searching(keyword).subscribe({
      next :(res :any)=>{
        this.results = res?.results
        console.log(res?.results);
      } ,
      error : (err)=>{
        console.log(err);
      } ,
      complete : ()=>{

      }
    })
  }
  logOut(){
    this.AuthService.logOut()
  }
}
