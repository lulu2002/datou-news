import {Component, OnInit} from '@angular/core';
import {faBaseballBall, faCode} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  codeIcon = faCode;
  baseballIcon = faBaseballBall;
  youtubeIcon = faYoutube;

  constructor() {
  }

  ngOnInit(): void {
  }

}
