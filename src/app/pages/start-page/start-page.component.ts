import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, take, tap } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';
import { DataStoreService } from 'src/app/service/data-store/data-store.service';

enum StartPageErrorType {
  JIRA_URL = 'jiraUrl',
}

function checkCookiesByUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (url) {
      const cookiesDetails = {
        domain: url,
      };

      chrome.cookies.getAll(cookiesDetails, (cookies) => {
        if (cookies.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    } else {
      resolve(false);
    }
  });
}

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent {
  private formBuilder = inject(FormBuilder);
  private dataStoreService = inject(DataStoreService);
  private authService = inject(AuthService);
  private router = inject(Router);
  readonly form = this.formBuilder.group({
    jiraUrl: [
      '',
      {
        validators: [Validators.required],
        asyncValidators: [this.jiraUrlValidator],
      },
    ],
  });

  getFirstFormError(): string {
    const controlNames = Object.keys(this.form.controls);
    for (const controlName of controlNames) {
      const control = this.form.get(controlName);
      for (const errorType of Object.values(StartPageErrorType)) {
        if (control && control?.hasError(errorType)) {
          return control.getError(errorType);
        }
      }
    }

    return '';
  }

  private async jiraUrlValidator(
    control: AbstractControl
  ): Promise<Record<StartPageErrorType, any> | null> {
    const value = control.value as string;
    const jiraUrlRegex = /^(https:\/\/)(([a-zA-Z0-9-]+\.)*atlassian\.net)(.*)/;
    const url = value.replace(jiraUrlRegex, `$2`);
    if (value && !jiraUrlRegex.test(value)) {
      return {
        [StartPageErrorType.JIRA_URL]: 'Please enter a valid Jira URL',
      };
    } else if (value && !(await checkCookiesByUrl(url))) {
      return {
        [StartPageErrorType.JIRA_URL]:
          'Cookies not found, please verify the authentication status of Jira.',
      };
    } else {
      return null;
    }
  }

  submitFormHandler() {
    if (this.form.status === 'VALID') {
      this.storeJiraUrl();
      this.authService.login();
      this.router.navigateByUrl('');
    } else {
      const err = new Error('Form is invalid.');
      console.error(err);
    }
  }

  private storeJiraUrl() {
    const jiraUrl = this.form.get('jiraUrl')?.value as string;
    this.dataStoreService.setUserConfig({
      jiraUrl: jiraUrl,
    });
  }
}
