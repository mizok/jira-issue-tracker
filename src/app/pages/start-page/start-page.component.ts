import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  FormControlStatus,
  Validators,
} from '@angular/forms';

enum StartPageErrorType {
  ATLASSIAN_DOMAIN = 'atlassianDomain',
}

function checkCookiesByDomain(domain: string) {
  if (domain) {
    const cookieDetails = {
      url: domain,
    };

    chrome.cookies.getAll(cookieDetails, (cookie: any) => {
      if (cookie) {
        return true;
      } else {
        return false;
      }
    });
  }

  return false;
}

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent {
  private formBuilder = inject(FormBuilder);
  readonly form = this.formBuilder.group({
    jiraDomain: ['', [Validators.required, this.atlassianDomainValidator]],
  });
  public get formControlStatus(): FormControlStatus {
    return this.form.status;
  }

  submitForm() {
    if (this.formControlStatus === 'VALID') {
    } else {
    }
  }

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

  private atlassianDomainValidator(
    control: AbstractControl
  ): Record<StartPageErrorType, any> | null {
    const value = control.value as string;
    const atlassianDomainRegex = /https:\/\/([a-zA-Z0-9-]+\.)*atlassian\.net/;

    if (value && !atlassianDomainRegex.test(value)) {
      return {
        [StartPageErrorType.ATLASSIAN_DOMAIN]:
          'Please enter a valid Atlassian domain',
      };
    } else if (value && !checkCookiesByDomain(value)) {
      return {
        [StartPageErrorType.ATLASSIAN_DOMAIN]:
          'Cookies not found, please verify the authentication status of Jira.',
      };
    } else {
      return null;
    }
  }
}
