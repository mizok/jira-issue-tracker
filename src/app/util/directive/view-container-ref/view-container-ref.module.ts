import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerRefDirective } from './view-container-ref.directive';

@NgModule({
  declarations: [ViewContainerRefDirective],
  imports: [CommonModule],
  exports: [ViewContainerRefDirective],
})
export class ViewContainerRefModule {}
