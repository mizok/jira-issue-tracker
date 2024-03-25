import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoPageComponent } from './memo-page.component';

const routes: Routes = [
  {
    path: '',
    component: MemoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoPageRoutingModule {}
