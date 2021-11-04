import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcollectionComponent } from './detailcollection.component';

describe('DetailcollectionComponent', () => {
  let component: DetailcollectionComponent;
  let fixture: ComponentFixture<DetailcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
