import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaluwanComponent } from './naluwan.component';

describe('NaluwanComponent', () => {
  let component: NaluwanComponent;
  let fixture: ComponentFixture<NaluwanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaluwanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaluwanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
