import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionskeletonComponent } from './collectionskeleton.component';

describe('CollectionskeletonComponent', () => {
  let component: CollectionskeletonComponent;
  let fixture: ComponentFixture<CollectionskeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionskeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionskeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
