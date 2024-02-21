import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-html-renderer',
  templateUrl: './html-renderer.component.html',
  styleUrls: ['./html-renderer.component.scss'],
})
export class HtmlRendererComponent implements AfterViewInit {
  private renderer = inject(Renderer2);
  @Input() renderHTML = '';
  @ViewChild('outputContainer') outputContainerEleRef!: ElementRef<any>;

  ngAfterViewInit(): void {
    this.renderHTMLBelowHost();
  }

  private renderHTMLBelowHost() {
    const container = this.outputContainerEleRef.nativeElement;
    const renderSource = this.renderHTML;
    // 使用DOMParser解析HTML字符串
    const parser = new DOMParser();
    const doc = parser.parseFromString(renderSource, 'text/html');
    const elements = doc.body.children;
    if (elements.length > 1) {
      Array.from(elements).forEach((ele) => {
        this.renderer.appendChild(container, ele);
      });
    } else {
      this.renderer.appendChild(container, elements[0]);
    }
  }
}
