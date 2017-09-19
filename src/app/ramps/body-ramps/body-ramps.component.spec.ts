import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRampsComponent } from './body-ramps.component';

describe('BodyRampsComponent', () => {
  let component: BodyRampsComponent;
  let fixture: ComponentFixture<BodyRampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
