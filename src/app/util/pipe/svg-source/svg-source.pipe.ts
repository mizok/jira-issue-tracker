import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'svgSource',
})
export class SvgSourcePipe implements PipeTransform {
  transform(source: string, styles?: { [key: string]: string }): string {
    // 創建一個 DOMParser 物件
    const parser = new DOMParser();
    const trimedSource = source.replace(/>\s+</g, '><').trim();
    // 將 SVG 源代碼解析為 XML 文檔
    const svgDoc = parser.parseFromString(trimedSource, 'image/svg+xml');

    // 獲取 SVG 根元素
    const svgElement = svgDoc.documentElement;

    // 檢查並設置每個樣式屬性
    if (styles) {
      Object.keys(styles).forEach((style) => {
        svgElement.setAttribute(style, styles[style]);
      });
    }

    // 將 SVG 源代碼編碼為 data URI
    return `data:image/svg+xml;charset=utf-8,${svgElement.outerHTML}`;
  }
}
