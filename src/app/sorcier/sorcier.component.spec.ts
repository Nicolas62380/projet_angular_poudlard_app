import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorcierComponent } from './sorcier.component';

describe('SorcierComponent', () => {
  let component: SorcierComponent;
  let fixture: ComponentFixture<SorcierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorcierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorcierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
