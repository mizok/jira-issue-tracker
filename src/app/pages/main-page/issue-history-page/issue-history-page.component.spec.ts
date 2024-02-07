import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueHistoryPageComponent } from './issue-history-page.component';

describe('IssueHistoryPageComponent', () => {
  let component: IssueHistoryPageComponent;
  let fixture: ComponentFixture<IssueHistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueHistoryPageComponent]
    });
    fixture = TestBed.createComponent(IssueHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
