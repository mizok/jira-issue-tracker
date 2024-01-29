// auth.guard.ts

import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { DataStoreService } from './service/data-store/data-store.service'; // 假设有一个 AuthService，用于管理用户登录状态

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private dataStorageService = inject(DataStoreService);
  private router = inject(Router);

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.dataStorageService.getUserConfig().pipe(
      take(1),
      map((config) => config.jiraUrl !== 'default')
    );
    return true;
  }
}
