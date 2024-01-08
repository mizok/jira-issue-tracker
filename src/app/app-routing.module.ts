import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    canMatch: [() => false],
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
