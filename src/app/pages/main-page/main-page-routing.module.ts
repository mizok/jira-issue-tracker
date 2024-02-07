import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { IssuePageComponent } from './issue-page/issue-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { IssueHistoryPageComponent } from './issue-history-page/issue-history-page.component';
import { MemoPageComponent } from './memo-page/memo-page.component';
import { MainPageRoutingType } from './main-page-routing-type';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: MainPageRoutingType.ISSUE.relativePath,
      },
      {
        path: MainPageRoutingType.ISSUE.relativePath,
        component: IssuePageComponent,
      },
      {
        path: MainPageRoutingType.CALENDAR.relativePath,
        component: CalendarPageComponent,
      },
      {
        path: MainPageRoutingType.ISSUE_HISTORY.relativePath,
        component: IssueHistoryPageComponent,
      },
      {
        path: MainPageRoutingType.MEMO.relativePath,
        component: MemoPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
