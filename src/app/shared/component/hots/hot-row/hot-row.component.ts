import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hot-row',
  templateUrl: './hot-row.component.html',
  styleUrls: ['./hot-row.component.scss']
})
export class HotRowComponent implements OnInit {

  @Input() public image: string;
  @Input() public title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
