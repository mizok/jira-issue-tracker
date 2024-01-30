import {
  AnimationEvent,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, inject } from '@angular/core';

enum ErrorInfoAnimationState {
  INITIAL = 'initial',
  FINAL = 'final',
}

export interface ErrorInfoDataType {
  errorMessage: string;
  disableClose?: boolean;
}

@Component({
  selector: 'app-error-info',
  templateUrl: './error-info.component.html',
  styleUrls: ['./error-info.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        ErrorInfoAnimationState.INITIAL,
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        })
      ),
      state(
        ErrorInfoAnimationState.FINAL,
        style({
          opacity: 1,
          transform: 'translateY(0%)',
        })
      ),
      transition('initial <=> final', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ErrorInfoComponent implements OnInit {
  private readonly dialogData: ErrorInfoDataType = inject(DIALOG_DATA);
  readonly dialogRef = inject(DialogRef<ErrorInfoDataType>);
  animationState: ErrorInfoAnimationState = ErrorInfoAnimationState.INITIAL;

  public get errorMessage() {
    return this.dialogData.errorMessage;
  }

  public get disableClose() {
    return this.dialogData.disableClose;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = ErrorInfoAnimationState.FINAL;
    });
  }

  close() {
    this.animationState = ErrorInfoAnimationState.INITIAL;
  }

  animationDoneHandler(event: AnimationEvent) {
    if (
      event.fromState === ErrorInfoAnimationState.FINAL &&
      event.toState === ErrorInfoAnimationState.INITIAL
    ) {
      this.dialogRef.close();
    }
  }
}
