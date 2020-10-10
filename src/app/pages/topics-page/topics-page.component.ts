import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicSection, TopicService} from "../../shared/component/topic/topic.service";

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss']
})
export class TopicsPageComponent implements OnInit, AfterContentChecked {

  private topicSection: TopicSection;
  private fragment: string;

  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => this.fragment = fragment);
  }

  ngAfterContentChecked(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {
    }
  }

  getTopicSection(): TopicSection {
    if (!this.topicSection) {
      const sectionName = this.route.snapshot.paramMap.get('topic');
      this.topicSection = this.topicService.getTopics(sectionName);
    }

    return this.topicSection;
  }

}
