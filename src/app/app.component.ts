import {Component, HostListener, OnInit} from '@angular/core';
import {ScreenService} from './shared/service/screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Personal-Website';

  constructor(public screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.screenService.innerWidth = window.innerWidth;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenService.innerWidth = window.innerWidth;
    console.log(this.screenService.innerWidth);
  }

}
