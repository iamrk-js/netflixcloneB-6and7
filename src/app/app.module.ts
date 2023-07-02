import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './shared/component/main-slider/main-slider.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { MovieDetailsComponent } from './shared/component/movie-details/movie-details.component';
import { MoviesDashboardComponent } from './shared/component/movies-dashboard/movies-dashboard.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    NavbarComponent,
    MovieDetailsComponent,
    MoviesDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
