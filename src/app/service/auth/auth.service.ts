import { Injectable, inject } from '@angular/core';
import { map, take, tap } from 'rxjs';
import { DataStoreService } from '../data-store/data-store.service';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private dataStorageService = inject(DataStoreService);
  private apiService = inject(ApiService);
  readonly isLogin$ = this.dataStorageService
    .getUserState()
    .pipe(map((state) => !!state));

  login() {
    return this.apiService.getCurrentUser().pipe(
      take(1),
      tap((userData) => {
        if (userData) {
          this.dataStorageService.setUserState({
            name: userData.displayName,
            avatarImgUrl: userData.displayName,
          });
        }
      })
    );
  }

  logout() {
    // this._isLogin.next(false);
  }
}
