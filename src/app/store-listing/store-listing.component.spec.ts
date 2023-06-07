import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreListingComponent } from './store-listing.component';

describe('StoreListingComponent', () => {
  let component: StoreListingComponent;
  let fixture: ComponentFixture<StoreListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreListingComponent]
    });
    fixture = TestBed.createComponent(StoreListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
