import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private topics: Topic[] = [];

  public createTopic(): Topic {
    const topic = new Topic();
    this.topics.push(topic);

    return topic;
  }
}

export class Topic {
  private map: Map<Subject, Category[]> = new Map();

  public get topics(): Map<Subject, Category[]> {
    return this.map;
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
  PROJECTS,
  EXP,
  GOALS
}
