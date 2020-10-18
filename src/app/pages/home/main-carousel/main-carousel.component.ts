import {Component, OnInit} from '@angular/core';
import {Topic, TopicService} from "../../../shared/service/topic.service";

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {

  public topics: Topic[] = [];

  constructor(private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(value => {
      this.topics = value;
    });
  }

}
