import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoPageComponent } from './memo-page.component';

describe('MemoPageComponent', () => {
  let component: MemoPageComponent;
  let fixture: ComponentFixture<MemoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemoPageComponent]
    });
    fixture = TestBed.createComponent(MemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
