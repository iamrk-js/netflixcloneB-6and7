import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../../model/movies';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
@Input() movie !: Imovies
  constructor() { }

  ngOnInit(): void {
  }

}
