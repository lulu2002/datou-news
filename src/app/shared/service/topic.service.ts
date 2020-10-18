import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';


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
      topic.route = topic.title.replace(/\s/g, '-');

      this.http.get(`${this.path}/${topic.htmlPath}`, {responseType: 'text'})
        .subscribe(value => topic.html = value);
    });
  }
}

export class Topic {
  public route: string;
  public title: string;
  public image: string;
  public figcaption: string;
  public htmlPath: string;
  public html: string;
}
