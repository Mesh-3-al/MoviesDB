import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { MovieService } from './movie.service';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movie/:movieID', component: MovieInfoComponent },
  { path: 'favorite', component: FavoriteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieInfoComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
