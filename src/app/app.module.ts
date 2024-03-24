import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SERVICE_WORKER } from './service/worker/worker.model';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInfoComponent } from './components/dialog/error-info/error-info.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DialogModule } from '@angular/cdk/dialog';

const DIALOGS = [ErrorInfoComponent];

export class AppOverlayContainer extends OverlayContainer {
  override _createContainer(): void {
    const container: HTMLDivElement = document.createElement('div');
    container.classList.add('app-overlay-container');

    const element: Element | null = document.querySelector(
      '#app-overlay-container-wrapper'
    );
    if (element !== null) {
      element.setAttribute('style', 'transform:translateZ(0);');
      element.appendChild(container);
      this._containerElement = container;
    }
  }
}

@NgModule({
  declarations: [AppComponent, ...DIALOGS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    ServiceWorkerModule.register(SERVICE_WORKER, {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    BrowserAnimationsModule,
  ],
  providers: [{ provide: OverlayContainer, useClass: AppOverlayContainer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
