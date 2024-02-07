import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformerPipe } from './transformer.pipe';

@NgModule({
  declarations: [TransformerPipe],
  imports: [CommonModule],
  exports: [TransformerPipe],
})
export class TransformerModule {}
