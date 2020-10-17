import {Component, Input, OnInit} from '@angular/core';
import {Topic, TopicService} from '../../shared/service/topic.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss']
})
export class TopicPageComponent implements OnInit {

  @Input() public topic: Topic;

  constructor(private route: ActivatedRoute,
              private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.loadTopic();
  }

  private loadTopic(): void {
    this.topicService.getTopic(this.route.snapshot.params.topic).subscribe(value => {
        if (value.length > 0) {
          this.topic = value[0];
        }
      }
    );
  }

}
