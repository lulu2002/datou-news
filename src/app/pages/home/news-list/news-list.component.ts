import {Component, OnInit} from '@angular/core';
import {Topic, TopicService} from '../../../shared/service/topic.service';
import {ScreenService} from "../../../shared/service/screen.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public topics: Topic[] = [];

  constructor(public topicService: TopicService,
              public screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(value => this.topics = value);
  }

}
