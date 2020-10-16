import {Component, OnInit} from '@angular/core';
import {TopicService} from '../../../shared/service/topic.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  constructor(public topicService: TopicService) {
  }

  ngOnInit(): void {
  }

}
