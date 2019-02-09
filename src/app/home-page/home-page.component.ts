import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  LatestMovies: any;
  SearchResult: any;
  Movie: any;

  constructor(public movieService: MovieService) {

    // Get the Latest Movies
    this.movieService.getLatestMovies().subscribe(data => {
      this.LatestMovies = data['results'];
    });

  }

  // Get the Search Results
  searchMovies() {
    this.movieService.searchMovie(this.Movie).subscribe(data => {
      this.SearchResult = data['results'];
    });
  }

  ngOnInit() {
  }

}
