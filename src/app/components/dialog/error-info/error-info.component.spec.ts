import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInfoComponent } from './error-info.component';

describe('ErrorInfoComponent', () => {
  let component: ErrorInfoComponent;
  let fixture: ComponentFixture<ErrorInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorInfoComponent]
    });
    fixture = TestBed.createComponent(ErrorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
