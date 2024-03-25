import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueHistoryPageComponent } from './issue-history-page.component';

const routes: Routes = [
  {
    path: '',
    component: IssueHistoryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssueHistoryPageRoutingModule {}
