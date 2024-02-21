import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) { }
  public transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

@Pipe({
  name: 'safeStyle'
})
export class SafeStylePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) { }
  public transform(value: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }
}

@Pipe({
  name: 'safeScript'
})
export class SafeScriptPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) { }
  public transform(value: string): SafeScript {
    return this.sanitizer.bypassSecurityTrustScript(value);
  }
}

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) { }
  public transform(value: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
}

@Pipe({
  name: 'safeResourceUrl'
})
export class SafeResourceUrlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) { }
  public transform(value: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

@Pipe({
  name: 'decodeHtml'
})
export class DecodeHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) { }
  public transform(value: string | undefined): SafeHtml | undefined {
    if (!value) { return ''; }
    const txt = document.createElement("textarea");
    txt.innerHTML = value;
    return new SafeHtmlPipe(this.sanitizer).transform(txt.value);
  }
}

export const SafePipes = [
  SafeHtmlPipe,
  SafeStylePipe,
  SafeScriptPipe,
  SafeUrlPipe,
  SafeResourceUrlPipe,
  DecodeHtmlPipe,
];
