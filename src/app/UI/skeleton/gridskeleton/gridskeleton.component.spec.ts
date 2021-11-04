import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridskeletonComponent } from './gridskeleton.component';

describe('GridskeletonComponent', () => {
  let component: GridskeletonComponent;
  let fixture: ComponentFixture<GridskeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridskeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridskeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
