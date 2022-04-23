import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorcierListComponent } from './sorcier-list.component';

describe('SorcierListComponent', () => {
  let component: SorcierListComponent;
  let fixture: ComponentFixture<SorcierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorcierListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorcierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
