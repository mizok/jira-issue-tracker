import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStoreService } from './service/data-store/data-store.service';
import { map, take } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/start-page/start-page.module').then(
        (res) => res.StartPageModule
      ),
  },
  {
    path: '',
    canMatch: [],
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (res) => res.MainPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
