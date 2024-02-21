import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlRendererComponent } from './html-renderer.component';

describe('HtmlRendererComponent', () => {
  let component: HtmlRendererComponent;
  let fixture: ComponentFixture<HtmlRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlRendererComponent]
    });
    fixture = TestBed.createComponent(HtmlRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
