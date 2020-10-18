import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NctuAnswerComponent } from './nctu-answer.component';

describe('NctuAnswerComponent', () => {
  let component: NctuAnswerComponent;
  let fixture: ComponentFixture<NctuAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NctuAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NctuAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
