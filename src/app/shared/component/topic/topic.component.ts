import {Component, Input, OnInit} from '@angular/core';
import {Topic, TopicService} from '../../service/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  topic: Topic;

  constructor(private topicService: TopicService) {

  }

  ngOnInit(): void {
  }
}
