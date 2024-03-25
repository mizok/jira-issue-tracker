import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformerModule } from 'src/app/util/pipe/transformer/transformer.module';
import { ImageUrlModule } from 'src/app/util/pipe/image-url/image-url.module';
import { SvgSourceModule } from 'src/app/util/pipe/svg-source/svg-source.module';
import { MemoPageComponent } from './memo-page.component';
import { MemoPageRoutingModule } from './memo-page-routing.module';

@NgModule({
  declarations: [MemoPageComponent],
  imports: [
    CommonModule,
    TransformerModule,
    ImageUrlModule,
    SvgSourceModule,
    MemoPageRoutingModule,
  ],
})
export class MemoPageModule {}
