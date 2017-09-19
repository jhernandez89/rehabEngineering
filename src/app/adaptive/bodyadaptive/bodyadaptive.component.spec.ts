import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyadaptiveComponent } from './bodyadaptive.component';

describe('BodyadaptiveComponent', () => {
  let component: BodyadaptiveComponent;
  let fixture: ComponentFixture<BodyadaptiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyadaptiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyadaptiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
