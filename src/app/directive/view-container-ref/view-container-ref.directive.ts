import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appViewContainerRef]',
})
export class ViewContainerRefDirective {
  readonly viewContainerRef = inject(ViewContainerRef);
}
