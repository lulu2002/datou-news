import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  public topics: Topic[] = [];

  constructor(private http: HttpClient) {
    const observable = http.get<Topic[]>('assets/data/topics.json');
    observable.subscribe(value => {
      this.topics = value;
      this.topics.forEach(topic => {
        http.get(topic.htmlPath, {responseType: 'text'}).subscribe(str => {
          topic.html = str;
        });
      });
    });
  }
}

export class Topic {
  public title: string;
  public description: string;
  public htmlPath: string;
  public html: string;
  private map: Map<Subject, Category[]> = new Map();

  public getCategories(subject: Subject): Category[] {
    const categories = this.map.get(subject);
    return categories ? categories : [];
  }

  public addIsIn(subject: Subject, toAdd: Category[]): void {
    const categories = this.get(subject);

    toAdd.forEach(value => {
      if (!categories.includes(value)) {
        categories.push(value);
      }
    });
  }

  private get(subject: Subject): Category[] {
    let categories = this.map.get(subject);

    if (!categories) {
      categories = [];
      this.map.set(subject, categories);
    }

    return categories;
  }
}

export interface TopicRoute {
  subject: Subject;
  categories: Category[];
}


export enum Subject {
  CODING,
  BASEBALL,
  YOUTUBE
}

export enum Category {
  ALL,
  PROJECTS,
  EXP,
  GOALS
}
