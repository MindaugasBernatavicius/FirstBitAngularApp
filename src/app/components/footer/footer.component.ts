import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {
    console.log("constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
}
