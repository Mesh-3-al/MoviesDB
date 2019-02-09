import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
    this.favorites[this.count] = this.movie;
    this.count += 1;
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = params['movieID'];
      this.movieService.getMovie(this.id).subscribe(data => { this.movie = data; });
    });
  }
}

