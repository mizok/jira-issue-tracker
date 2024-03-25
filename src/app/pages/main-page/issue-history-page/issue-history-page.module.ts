import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformerModule } from 'src/app/util/pipe/transformer/transformer.module';
import { ImageUrlModule } from 'src/app/util/pipe/image-url/image-url.module';
import { SvgSourceModule } from 'src/app/util/pipe/svg-source/svg-source.module';
import { IssueHistoryPageComponent } from './issue-history-page.component';
import { IssueHistoryPageRoutingModule } from './issue-history-page-routing.module';

@NgModule({
  declarations: [IssueHistoryPageComponent],
  imports: [
    CommonModule,
    TransformerModule,
    ImageUrlModule,
    SvgSourceModule,
    IssueHistoryPageRoutingModule,
  ],
})
export class IssueHistoryPageModule {}
