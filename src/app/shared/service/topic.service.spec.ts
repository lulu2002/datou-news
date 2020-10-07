import { TestBed } from '@angular/core/testing';

import { TopicSelectorService } from './topic-selector.service';

describe('TopicService', () => {
  let service: TopicSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
