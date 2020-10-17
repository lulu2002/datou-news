import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-guess-you-like',
  templateUrl: './guess-you-like.component.html',
  styleUrls: ['./guess-you-like.component.scss']
})
export class GuessYouLikeComponent implements OnInit {

  public amounts = Array(7);

  constructor() {
  }

  ngOnInit(): void {

  }

}
