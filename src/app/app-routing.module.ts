import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDashboardComponent } from './shared/component/movies-dashboard/movies-dashboard.component';
import { MovieDetailsComponent } from './shared/component/movie-details/movie-details.component';

const routes: Routes = [
  {path : '', component : MoviesDashboardComponent},
  {path : 'movieDetails/:movieId', component : MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
