import {Component, Input, OnInit} from '@angular/core';
import {FaIconComponent, FaIconLibrary} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss']
})
export class SkillIconComponent implements OnInit {

  @Input() icon: FaIconComponent;
  @Input() title: string;
  @Input() description: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
