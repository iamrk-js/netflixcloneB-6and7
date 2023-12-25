import { Component, OnInit } from '@angular/core';
import { Imovies, Itrailer } from '../../model/movies';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../service/movies.service';
import { first } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId!: string;
  moviedetails!: Imovies;
  movieTrailers : Array<Itrailer> = [];
  // trailerUrl !: SafeResourceUrl
  constructor(
    private _route: ActivatedRoute,
    private _moviesService: MoviesService,
    private _sanitizier : DomSanitizer
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(first()).subscribe((params: Params) => {
      this.movieId = params['movieId'];
      console.log(this.movieId);
      if (this.movieId) {
        this._moviesService.getMovieDetails(this.movieId).subscribe((res) => {
          this.moviedetails = res;
        });

        this._moviesService
          .getMovieTrailer(this.movieId)
          .subscribe((trailers) => {
            console.log('trailers', trailers);
            this.movieTrailers = trailers
          });
      }
    });
  }

  // runTrailer(key:string){
  //   console.log(key)
  //   let url = `https://www.youtube.com/embed/${key}`;

  //   this.trailerUrl = this._sanitizier.bypassSecurityTrustResourceUrl(url)
  // }
}
