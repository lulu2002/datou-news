import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../../../shared/service/topic.service';
import {TopicSelectorService} from '../../../../shared/service/topic-selector.service';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss']
})
export class CategoryButtonComponent implements OnInit {

  @Input() category: Category;
  @Input() name: string;
  @Input() defaultActive: boolean;

  constructor(private selectService: TopicSelectorService) {
  }

  ngOnInit(): void {
  }

  updateCategory(): void {
    this.selectService.currentCategory = this.category;
  }

  checkActive(): boolean {
    if (this.defaultActive) {
      this.defaultActive = false;
      return true;
    }
  }
}
