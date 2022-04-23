import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorcierFormComponent } from './sorcier-form.component';

describe('SorcierFormComponent', () => {
  let component: SorcierFormComponent;
  let fixture: ComponentFixture<SorcierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorcierFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorcierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
