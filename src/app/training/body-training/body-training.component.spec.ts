import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTrainingComponent } from './body-training.component';

describe('BodyTrainingComponent', () => {
  let component: BodyTrainingComponent;
  let fixture: ComponentFixture<BodyTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
