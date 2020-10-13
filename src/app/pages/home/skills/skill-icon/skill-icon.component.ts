import {Component, Input, OnInit} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Subject} from '../../../../shared/service/topic.service';
import {TopicSelectorService} from '../../../../shared/service/topic-selector.service';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss']
})
export class SkillIconComponent implements OnInit {

  @Input() icon: FaIconComponent;
  @Input() subject: Subject;
  @Input() title: string;
  @Input() description: string;

  constructor(public selectService: TopicSelectorService) {

  }

  ngOnInit(): void {
  }

}
