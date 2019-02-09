import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie: any;
  id: number;
  favorites: any;
  count = 0;

  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  AddToFavorite() {
    let movies = localStorage.getItem('movies');
    if (movies === null) {
      movies = '';
    }

    movies = movies.concat(this.movie.id + ',');
    const remove_dup = new Set(movies.split(','));
    movies += localStorage.setItem('movies', Array.from(remove_dup).join(','));
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = params['movieID'];
      this.movieService.getMovie(this.id).subscribe(data => { this.movie = data; });
    });
  }
}

