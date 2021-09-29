import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating = 0;
  // ... event emitter than contains a string
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() starClicked: EventEmitter<number> = new EventEmitter<number>();
  width = 0;

  constructor() {
    // this.width = (75 / 5) * this.rating;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.width = (75 / 5) * this.rating;
  }

  ngOnInit(): void {
    // this.width = (75 / 5) * this.rating;
  }

  handleClick(): void {
    // this.ratingClicked.emit(100); // error!
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  starClick(starIdx: number): void {
    this.starClicked.emit(starIdx);
  }
}
