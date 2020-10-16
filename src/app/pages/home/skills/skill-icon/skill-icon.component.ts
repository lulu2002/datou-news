import {Component, Input, OnInit} from '@angular/core';
import {Topic, TopicService} from '../../../../shared/service/topic.service';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss']
})
export class SkillIconComponent implements OnInit {

  @Input() topic: Topic;

  constructor(public topicService: TopicService) {

  }

  ngOnInit(): void {
  }

}
