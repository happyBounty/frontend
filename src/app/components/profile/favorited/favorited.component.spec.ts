import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritedComponent } from './favorited.component';

describe('FavoritedComponent', () => {
  let component: FavoritedComponent;
  let fixture: ComponentFixture<FavoritedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
