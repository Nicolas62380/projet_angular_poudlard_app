import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorcierDetailsComponent } from './sorcier-details.component';

describe('SorcierDetailsComponent', () => {
  let component: SorcierDetailsComponent;
  let fixture: ComponentFixture<SorcierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorcierDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorcierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
