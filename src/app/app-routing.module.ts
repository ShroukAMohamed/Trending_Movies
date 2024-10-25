import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MoviesComponent } from './components/movies/movies.component';
import { authGuard } from './auth.guard';
import { roleGuard } from './role.guard';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'about',canActivate:[authGuard],component:AboutComponent},
  {path:'tv-shows',canActivate:[authGuard],component:TvShowsComponent},
  {path:'login',canActivate:[roleGuard],component:LoginComponent},
  {path:'register',canActivate:[roleGuard],component:RegisterComponent},
  {path:'details/:id',canActivate:[authGuard],component:MovieDetailsComponent},
  {path:'movies',canActivate:[authGuard],component:MoviesComponent},
  {path:'tv-details/:id',canActivate:[authGuard],component:TvDetailsComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
