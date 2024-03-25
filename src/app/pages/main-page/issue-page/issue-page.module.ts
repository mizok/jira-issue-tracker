import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformerModule } from 'src/app/util/pipe/transformer/transformer.module';
import { ImageUrlModule } from 'src/app/util/pipe/image-url/image-url.module';
import { SvgSourceModule } from 'src/app/util/pipe/svg-source/svg-source.module';
import { IssuePageComponent } from './issue-page.component';
import { IssuePageRoutingModule } from './issue-page-routing.module';

@NgModule({
  declarations: [IssuePageComponent],
  imports: [
    CommonModule,
    TransformerModule,
    ImageUrlModule,
    SvgSourceModule,
    IssuePageRoutingModule,
  ],
})
export class IssuePageModule {}
