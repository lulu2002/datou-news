import {Component, OnInit} from '@angular/core';
import {Category, Subject, Topic, TopicService} from '../../../shared/component/topic/topic.service';
import {TopicSelectorService} from '../../../shared/service/topic-selector.service';

@Component({
  selector: 'app-skill-info',
  templateUrl: './skill-info.component.html',
  styleUrls: ['./skill-info.component.scss']
})
export class SkillInfoComponent implements OnInit {

  constructor(
    private selectorService: TopicSelectorService,
    public topicService: TopicService) {
  }

  ngOnInit(): void {
  }

  getTopics(): Topic[] {
    return this.topicService.topics.filter(topic => this.isFitSearch(topic));
  }

  private isFitSearch(topic: Topic): boolean {
    const service = this.selectorService;
    return topic.getCategories(service.currentSubject).includes(service.currentCategory);
  }
}
