import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canMatch: [() => inject(AuthService).isLogin$],
    redirectTo: 'main',
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/start-page/start-page.module').then(
        (res) => res.StartPageModule
      ),
  },
  {
    path: 'main',
    canMatch: [() => inject(AuthService).isLogin$],
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
