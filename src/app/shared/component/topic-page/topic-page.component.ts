import {Component, OnInit} from '@angular/core';
import {Category, Subject, TopicRoute} from '../topic/topic.service';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss']
})
export abstract class TopicPageComponent implements OnInit {
  /*
  topic page 可以創建 topic
  (topic page 內建可以設定 topic 類別的變數)
   */
  public subjects = Subject;
  public categories = Category;

  public makeRoute(s: Subject, ...c: Category[]): TopicRoute {
    return {
      subject: s,
      categories: c
    };
  }

  abstract ngOnInit(): void;
}
