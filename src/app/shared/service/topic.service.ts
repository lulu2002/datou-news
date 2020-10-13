import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TopicService {
  public topics: Map<string, TopicSection> = new Map();

  constructor(private http: HttpClient) {
    this.values().forEach(subject => {
      subject = subject.toLowerCase();
      const path = `assets/topics/${subject}`;
      http.get<TopicSection>(`${path}/topics.json`).subscribe(topics => {
        this.loadTopics(topics.topics, path);
        this.topics.set(subject, topics);
      });
    });
  }

  public getTopicSection(subject: Subject | string): TopicSection {
    if (typeof subject === 'string') {
      return this.topics.get(subject.toLowerCase());
    }

    const section = this.topics.get(Subject[subject].toLowerCase());
    return section;
  }

  private loadTopics(topics: Topic[], path: string): void {
    topics.forEach(topic => {

      if (!topic.categories) {
        topic.categories = [];
      } else {
        topic.categories = this.loadCategoriesFromString(topic.categories);
      }

      topic.categories.push(Category.ALL);
      topic.route = topic.title.replace(/\s/g, '-');

      this.http.get(`${path}/${topic.htmlPath}`, {responseType: 'text'})
        .subscribe(value => topic.html = value);
    });
  }

  private loadCategoriesFromString(categories: Category[]): Category[] {
    // @ts-ignore
    return categories.map(value => Category[value]);
  }

  private values(): string[] {
    return [
      Subject[Subject.CODING],
      Subject[Subject.BASEBALL],
      Subject[Subject.YOUTUBE]
    ];
  }
}

export interface TopicSection {
  title: string;
  description: string;
  longDescription: string;
  topics: Topic[];
}

export class Topic {
  public route: string;
  public title: string;
  public description: string;
  public htmlPath: string;
  public html: string;
  public categories: Category[] = [];
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
  IMPORTANT,
  ALL,
  PROJECTS,
  EXP,
  GOALS
}
