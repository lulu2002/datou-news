import {Injectable} from '@angular/core';
import {Category, Subject} from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class TopicSelectorService {

  public currentSubject: Subject = Subject.CODING;
  public currentCategory: Category = Category.ALL;

  constructor() {
  }

}
