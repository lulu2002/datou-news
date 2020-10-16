import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private path = `assets/topics`;
  public topics: Topic[] = [];

  constructor(private http: HttpClient) {
    this.loadTopics();
  }

  private loadTopics(): void {

    this.http.get<Topic[]>(`${this.path}/topics.json`).subscribe(value => {
      this.topics = value;
      this.updateTopics();
    });

  }

  private updateTopics(): void {
    this.topics.forEach(topic => {
      topic.route = topic.title.replace(/\s/g, '-');

      this.http.get(`${this.path}/${topic.htmlPath}`, {responseType: 'text'})
        .subscribe(value => topic.html = value);
    });
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
  public icon: string;
  public description: string;
  public htmlPath: string;
  public html: string;
}
