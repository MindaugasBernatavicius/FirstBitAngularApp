import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  rating = 2.75;
  width = (75 / 5) * this.rating;

  constructor() { }

  ngOnInit(): void {
  }

}
