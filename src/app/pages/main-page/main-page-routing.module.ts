import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
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
        loadChildren: () =>
          import('./issue-page/').then((res) => res.IssuePageModule),
      },
      {
        path: MainPageRoutingType.CALENDAR.relativePath,
        loadChildren: () =>
          import('./calendar-page/').then((res) => res.CalendarPageModule),
      },
      {
        path: MainPageRoutingType.ISSUE_HISTORY.relativePath,
        loadChildren: () =>
          import('./issue-history-page/').then(
            (res) => res.IssueHistoryPageModule
          ),
      },
      {
        path: MainPageRoutingType.MEMO.relativePath,
        loadChildren: () =>
          import('./memo-page/').then((res) => res.MemoPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
