import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicSection, TopicService} from '../../shared/component/topic/topic.service';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss']
})
export class TopicsPageComponent implements OnInit, AfterContentChecked {

  private topicSection: TopicSection;
  private fragment: string;
  private currentRoute: string;

  public toggled: boolean;
  public barsIcon = faBars;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => this.fragment = fragment);
    this.updateCurrentRoute();
  }

  private updateCurrentRoute(): void {
    let currentRoute = '';
    this.route.snapshot.url.forEach(value => {
      currentRoute = currentRoute.concat(`/${value.path}`);
    });
    this.currentRoute = currentRoute;
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
      this.topicSection = this.topicService.getTopicSection(sectionName);
    }

    return this.topicSection;
  }

  getCurrentRoute(): string {
    return this.currentRoute;
  }

  toggle(): void {
    this.toggled = !this.toggled;
  }
}
