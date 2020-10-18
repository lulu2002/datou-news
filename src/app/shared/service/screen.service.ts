import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  public innerWidth: number;

  constructor() {
  }

  public biggerThanMedium(): boolean {
    return this.innerWidth > 767;
  }

  public smallerThanMedium(): boolean {
    return this.innerWidth <= 767;
  }
}
