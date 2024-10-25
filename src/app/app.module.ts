import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environments/environments';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from "ngx-owl-carousel-o";
import { ProfileComponent } from './settings/profile/profile.component';
import { PasswordComponent } from './settings/password/password.component';
import { SeeMorePipe } from './see-more.pipe';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { NgxHttpLoaderModule } from "ngx-http-loader";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TvShowsComponent,
    MoviesComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
    HeaderComponent,
    ProfileComponent,
    PasswordComponent,
    SeeMorePipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxHttpLoaderModule.forRoot(),
    CommonModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
