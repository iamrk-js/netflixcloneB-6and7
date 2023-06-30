import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imovies, ImoviesResp, Itrailer, ItrailersRes } from '../model/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = environment.baseurl;
  apiKey: string = environment.apiKey;
  constructor(private _http: HttpClient) {}

  getLetTrendingMovies(): Observable<Imovies[]> {
    let trendingMovies = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`;
    return this._http
      .get<ImoviesResp>(trendingMovies)
      .pipe(map((res) => res.results));
    // const params = new HttpParams()
  }

  getMovieDetails(id: string): Observable<Imovies> {
    let detailsUrl = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this._http.get<Imovies>(detailsUrl);
  }

  getMovieTrailer(id: string): Observable<Itrailer[]> {
    let detailsUrl = `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`;
    return this._http.get<ItrailersRes>(detailsUrl).
          pipe(
            map(res => res.results)
          );
  }
}
