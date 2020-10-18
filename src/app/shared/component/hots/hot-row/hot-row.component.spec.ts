import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotRowComponent } from './hot-row.component';

describe('HotRowComponent', () => {
  let component: HotRowComponent;
  let fixture: ComponentFixture<HotRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
