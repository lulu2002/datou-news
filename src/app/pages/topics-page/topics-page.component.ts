import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject, TopicSection, TopicService} from "../../shared/component/topic/topic.service";

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss']
})
export class TopicsPageComponent implements OnInit {

  private topicSection: TopicSection;

  constructor(private route: ActivatedRoute, private topicService: TopicService) {
  }

  ngOnInit(): void {

  }

  getTopicSection(): TopicSection {
    if (!this.topicSection) {
      const sectionName = this.route.snapshot.paramMap.get('topic');
      this.topicSection = this.topicService.getTopics(sectionName);
    }

    return this.topicSection;
  }

}
