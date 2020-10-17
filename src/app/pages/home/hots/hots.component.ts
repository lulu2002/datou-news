import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hots',
  templateUrl: './hots.component.html',
  styleUrls: ['./hots.component.scss']
})
export class HotsComponent implements OnInit {

  public contents: number[];

  constructor() {
    this.contents = Array(5);
  }

  ngOnInit(): void {
  }

}
