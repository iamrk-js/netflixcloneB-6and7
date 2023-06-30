import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Imovies } from '../../model/movies';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

  title = 'netflixclone';
  moviesArray: Array<Imovies> = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<<', '>>'],
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  constructor(private _moviesService: MoviesService) {}
  ngOnInit(): void {
    this._moviesService.getLetTrendingMovies().subscribe((res) => {
      this.moviesArray = res;
    });
  }

}
