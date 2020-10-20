import { Component, OnInit } from '@angular/core';
import {ScreenService} from '../../service/screen.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public screenService: ScreenService) { }

  ngOnInit(): void {
  }

}
