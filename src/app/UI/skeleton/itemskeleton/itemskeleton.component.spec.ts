import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemskeletonComponent } from './itemskeleton.component';

describe('ItemskeletonComponent', () => {
  let component: ItemskeletonComponent;
  let fixture: ComponentFixture<ItemskeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemskeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemskeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
