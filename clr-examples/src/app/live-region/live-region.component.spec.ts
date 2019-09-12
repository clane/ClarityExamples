import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveRegionComponent } from './live-region.component';

describe('LiveRegionComponent', () => {
  let component: LiveRegionComponent;
  let fixture: ComponentFixture<LiveRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
