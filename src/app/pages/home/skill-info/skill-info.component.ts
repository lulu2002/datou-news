import {Component, OnInit} from '@angular/core';
import {Category, Subject, Topic, TopicSection, TopicService} from '../../../shared/component/topic/topic.service';
import {TopicSelectorService} from '../../../shared/service/topic-selector.service';

@Component({
  selector: 'app-skill-info',
  templateUrl: './skill-info.component.html',
  styleUrls: ['./skill-info.component.scss']
})
export class SkillInfoComponent implements OnInit {

  public subject = Subject;

  constructor(
    private selectorService: TopicSelectorService,
    public topicService: TopicService) {
  }

  ngOnInit(): void {
  }

  getCurrentSection(): TopicSection {
    return this.topicService.getTopics(this.selectorService.currentSubject);
  }
}
