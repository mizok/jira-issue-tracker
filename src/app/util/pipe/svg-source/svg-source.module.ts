import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgSourcePipe } from './svg-source.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SvgSourcePipe],
  exports: [SvgSourcePipe],
})
export class SvgSourceModule {}
