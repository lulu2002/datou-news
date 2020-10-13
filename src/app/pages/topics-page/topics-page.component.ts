import {AfterContentChecked, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TopicSection, TopicService} from '../../shared/service/topic.service';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopicsPageComponent implements OnInit, AfterContentChecked {

  private topicSection: TopicSection;
  private fragment: string;
  private currentRoute: string;

  public toggled: boolean;
  public barsIcon = faBars;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicService,
              private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => this.fragment = fragment);
    this.updateCurrentRoute();
  }

  ngAfterContentChecked(): void {
    try {
      this.viewportScroller.setOffset([0, 60]);
      this.viewportScroller.scrollToAnchor(this.fragment);
    } catch (e) {
    }
  }

  private updateCurrentRoute(): void {
    let currentRoute = '';
    this.route.snapshot.url.forEach(value => {
      currentRoute = currentRoute.concat(`/${value.path}`);
    });
    this.currentRoute = currentRoute;
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
