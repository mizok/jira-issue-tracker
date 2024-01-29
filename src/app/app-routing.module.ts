import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStoreService } from './service/data-store/data-store.service';
import { map, take, tap } from 'rxjs';

const routes: Routes = [
  // {
  //   path: '',
  //   canMatch: [
  //     () =>
  //       inject(DataStoreService)
  //         .getUserConfig()
  //         .pipe(
  //           take(1),
  //           tap((config) => console.log(config)),
  //           map((config) => config.jiraUrl !== 'default')
  //         ),
  //   ],
  //   loadChildren: () =>
  //     import('./pages/main-page/main-page.module').then(
  //       (res) => res.MainPageModule
  //     ),
  // },
  {
    path: '',
    canActivate: [],
    loadChildren: () =>
      import('./pages/start-page/start-page.module').then(
        (res) => res.StartPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
