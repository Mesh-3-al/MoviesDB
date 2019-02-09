import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  Fmovies: any;


  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  getFavorite() {
    console.log(123);

    let ids = localStorage.getItem('movies').split(',');

    if (ids === null) {
      ids = [];
    } else {
      ids.pop();
       this.movieService.getMovie(Number(ids[0])).subscribe(data => { this.Fmovies = data; });
    }
  }
  ngOnInit() {
  }

}
