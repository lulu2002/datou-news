import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Topic, TopicService} from '../../shared/service/topic.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {YouTubePlayerModule} from '@angular/youtube-player';


@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopicPageComponent implements OnInit {

  @Input() public topic: Topic;
  @Input() public topics: Topic[];

  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadTopic();
  }

  public getOtherTopics(): Topic[] {
    return this.topics.filter(value => value.title !== this.topic.title);
  }

  private loadTopic(): void {
    this.topicService.getTopic(this.route.snapshot.params.topic).subscribe(value => {
        if (value.length > 0) {
          this.topic = value[0];
        }
      }
    );
    this.topicService.getTopics().subscribe(value => {
      this.topics = value;
    });
  }

}
