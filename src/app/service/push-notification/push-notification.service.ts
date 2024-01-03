import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  constructor() {}

  requestPermission(): Promise<boolean> {
    const prm = new Promise<boolean>((res, rej) => {
      if ('Notification' in window) {
        Notification.requestPermission().then((permission) => {
          res(permission === 'granted');
        });
      } else {
        rej('Notification not supported');
      }
    });

    return prm;
  }

  private subscribeToPush() {
    // 此處應該與後端服務通信以註冊推送
    // 通常會使用 FCM 或其他推送服務
  }
}
