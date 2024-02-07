import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MemoPageComponent } from './memo-page/memo-page.component';
import { IssueHistoryPageComponent } from './issue-history-page/issue-history-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { TransformerModule } from 'src/app/util/pipe/transformer/transformer.module';

@NgModule({
  declarations: [
    MainPageComponent,
    MemoPageComponent,
    IssueHistoryPageComponent,
    CalendarPageComponent,
  ],
  imports: [CommonModule, MainPageRoutingModule, TransformerModule],
})
export class MainPageModule {}
