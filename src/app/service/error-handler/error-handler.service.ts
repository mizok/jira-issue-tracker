import { Injectable, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { throwError } from 'rxjs';
import {
  ErrorInfoComponent,
  ErrorInfoDataType,
} from 'src/app/components/dialog/error-info/error-info.component';
import { Overlay } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private dialog = inject(Dialog);
  private overlay = inject(Overlay);

  info(errorMessage: string, disableClose = false) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally();

    this.dialog.open<ErrorInfoDataType>(ErrorInfoComponent, {
      panelClass: 'error-info-panel',
      backdropClass: 'error-info-backdrop',
      disableClose: true,
      positionStrategy: positionStrategy,
      data: {
        errorMessage: errorMessage,
        disableClose: disableClose,
      },
    });

    return throwError(() => new Error(errorMessage));
  }
}
