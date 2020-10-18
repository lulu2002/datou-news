import {Component, OnInit} from '@angular/core';
import {ScreenService} from '../../service/screen.service';

@Component({
  selector: 'app-flash-news',
  templateUrl: './flash-news.component.html',
  styleUrls: ['./flash-news.component.scss']
})
export class FlashNewsComponent implements OnInit {

  constructor(public screenService: ScreenService) {
  }

  ngOnInit(): void {
  }

}
