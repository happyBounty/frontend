import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionitemComponent } from './collectionitem.component';

describe('CollectionitemComponent', () => {
  let component: CollectionitemComponent;
  let fixture: ComponentFixture<CollectionitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
