import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
  checkCookie() {
    const cookieDetails = {
      url: 'https://neutec.atlassian.net/',
    };

    chrome.cookies.getAll(cookieDetails, (cookie: any) => {
      if (cookie) {
        // 如果cookie存在，將其值打印到控制台
        console.log('Cookie Value:', cookie);
      } else {
        console.log('Cookie not found');
      }
    });
  }
}
