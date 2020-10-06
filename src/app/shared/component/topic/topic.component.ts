import {Component, Input, OnInit} from '@angular/core';
import {Category, Subject, Topic, TopicRoute, TopicService} from './topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() title: string;
  @Input() routes: TopicRoute[];

  topic: Topic;

  constructor(private topicService: TopicService) {
  }

  ngOnInit(): void {
    const t = this.topicService.createTopic();
    this.routes.forEach(r => {
      t.addIsIn(r.subject, r.categories);
    });
  }
}
