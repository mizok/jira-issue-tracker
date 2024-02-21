import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlRendererComponent } from './html-renderer.component';

@NgModule({
  declarations: [HtmlRendererComponent],
  imports: [CommonModule],
  exports: [HtmlRendererComponent],
})
export class HtmlRendererModule {}
