import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipes } from './safe-content.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: SafePipes,
  exports: SafePipes,
})
export class SafeContentModule { }
