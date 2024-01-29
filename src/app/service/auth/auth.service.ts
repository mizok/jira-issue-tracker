import { Injectable, inject } from '@angular/core';
import { Subject, take, tap } from 'rxjs';
import { DataStoreService } from '../data-store/data-store.service';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLogin = new Subject();
  private dataStorageService = inject(DataStoreService);
  private apiService = inject(ApiService);
  readonly isLogin$ = this._isLogin.asObservable();

  login() {
    return this.apiService.getCurrentUser().pipe(
      take(1),
      tap((userData) => {
        if (userData) {
          this.dataStorageService.setUserState({
            name: userData.displayName,
          });
          this._isLogin.next(true);
        }
      })
    );
  }

  logout() {
    // this._isLogin.next(false);
  }
}
