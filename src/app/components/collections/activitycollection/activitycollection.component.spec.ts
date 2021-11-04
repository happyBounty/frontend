import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitycollectionComponent } from './activitycollection.component';

describe('ActivitycollectionComponent', () => {
  let component: ActivitycollectionComponent;
  let fixture: ComponentFixture<ActivitycollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitycollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitycollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
