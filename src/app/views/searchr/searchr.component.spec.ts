import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrComponent } from './searchr.component';

describe('SearchrComponent', () => {
  let component: SearchrComponent;
  let fixture: ComponentFixture<SearchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
