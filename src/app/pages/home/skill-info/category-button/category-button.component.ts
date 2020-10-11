import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../../shared/component/topic/topic.service';
import {TopicSelectorService} from '../../../../shared/service/topic-selector.service';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss']
})
export class CategoryButtonComponent implements OnInit {

  @Input() category: Category;
  @Input() name: string;

  constructor(private selectService: TopicSelectorService) {
  }

  ngOnInit(): void {
  }

  updateCategory(): void {
    this.selectService.currentCategory = this.category;
  }
}
