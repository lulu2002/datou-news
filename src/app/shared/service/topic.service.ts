import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {RandomUtils} from '../util/random-utils';


@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private path = `assets/topics`;

  constructor(private http: HttpClient) {
  }

  public getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.path}/topics.json`)
      .pipe(
        map(x => {
          this.updateTopics(x);
          return x;
        })
      );
  }

  public getLink(topic: Topic): string {
    return `topics/${topic.route}`;
  }

  public getTopic(route: string): Observable<Topic[]> {
    return this.getTopics().pipe(
      map(x => x.filter(value => value.route === route))
    );
  }

  public getPlainHtml(topic: Topic): string {
    return topic.html.replace(/<[^>]*>/g, '');
  }

  public getHtmlTruncate(topic: Topic, length: number): string {
    const html = this.getPlainHtml(topic);

    if (html.length > length) {
      return `${html.substring(0, length)}...`;
    }

    return html.substring(0, html.length);
  }

  private updateTopics(topics: Topic[]): void {
    topics.forEach(topic => {
      this.generateRandomViewCount(topic);
      this.generateRandomDate(topic);
      this.getHtml(topic);
    });
  }

  private getHtml(topic: Topic): void {
    topic.route = topic.title.replace(/\s/g, '-');

    this.http.get(`${this.path}/${topic.htmlPath}`, {responseType: 'text'})
      .subscribe(value => topic.html = value);
  }

  private generateRandomViewCount(topic: Topic): void {
    topic.viewCount = RandomUtils.getRandomNum(500, 900);
  }

  private generateRandomDate(topic: Topic): void {
    const hour = RandomUtils.getRandomNum(0, 23).toString().padStart(2, '0');
    const minute = RandomUtils.getRandomNum(0, 59).toString().padStart(2, '0');

    const date = new Date();
    topic.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${hour}:${minute}`;
  }
}

export class Topic {
  public route: string;
  public title: string;
  public image: string;
  public figcaption: string;
  public viewCount: number;
  public htmlPath: string;
  public html: string;
  public date: string;
}
