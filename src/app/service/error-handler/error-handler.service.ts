import { Injectable, Type, inject } from '@angular/core';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private dialog = inject(Dialog);
  info(dialogComponent: Type<any>) {
    this.dialog.open(dialogComponent, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }
}
