import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pm-star",
  styleUrls: ["./star.component.css"],
  templateUrl: "./star.component.html"
})

export class StarComponent implements OnChanges {
  //input so can pass to another component
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Rating ${this.rating} clicked`);
  }
}
