import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptivePictureComponent } from './adaptive-picture.component';

describe('AdaptivePictureComponent', () => {
  let component: AdaptivePictureComponent;
  let fixture: ComponentFixture<AdaptivePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptivePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptivePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
