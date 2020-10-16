import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicSection, TopicService} from '../../shared/service/topic.service';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopicsPageComponent implements OnInit, AfterViewInit {

  private fragment: string;
  private currentRoute: string;

  public toggled: boolean;
  public barsIcon = faBars;

  @ViewChild('topicSections') topicSections: HTMLTableSectionElement;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public topicService: TopicService,
              private viewportScroller: ViewportScroller) {
  }

  ngAfterViewInit(): void {
    window.setTimeout(() => {
      this.viewportScroller.setOffset([0, 60]);
      this.viewportScroller.scrollToAnchor(this.fragment);
    }, 30);
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

  getCurrentRoute(): string {
    return this.currentRoute;
  }

  toggle(): void {
    this.toggled = !this.toggled;
  }
}
