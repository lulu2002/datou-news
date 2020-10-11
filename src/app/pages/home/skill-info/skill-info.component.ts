import {Component, OnInit} from '@angular/core';
import {Category, Subject, Topic, TopicSection, TopicService} from '../../../shared/component/topic/topic.service';
import {TopicSelectorService} from '../../../shared/service/topic-selector.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-skill-info',
  templateUrl: './skill-info.component.html',
  styleUrls: ['./skill-info.component.scss']
})
export class SkillInfoComponent implements OnInit {

  public subject = Subject;
  public category = Category;

  constructor(
    private selectorService: TopicSelectorService,
    public topicService: TopicService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getFitTopics(): Topic[] {
    const section = this.getCurrentSection();

    return section.topics
      .filter(topic => topic.categories.includes(this.selectorService.currentCategory));
  }

  getCurrentSection(): TopicSection {
    return this.topicService.getTopicSection(this.selectorService.currentSubject);
  }
}
