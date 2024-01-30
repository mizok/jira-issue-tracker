import { Injectable, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { throwError } from 'rxjs';
import { ErrorInfoComponent } from 'src/app/components/dialog/error-info/error-info.component';
import { Overlay } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private dialog = inject(Dialog);
  private overlay = inject(Overlay);

  info(errorMessage: string) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .top('10px');
    this.dialog.open<{ errorMessage: string }>(ErrorInfoComponent, {
      panelClass: 'error-info-panel',
      backdropClass: 'error-info-backdrop',
      disableClose: true,
      positionStrategy: positionStrategy,
      data: {
        errorMessage: errorMessage,
      },
    });

    console.warn(errorMessage);

    return throwError(() => new Error(errorMessage));
  }
}
