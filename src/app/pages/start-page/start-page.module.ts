import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { StartPageRoutingModule } from './start-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgModule } from 'src/app/components/error-msg/error-msg.module';

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StartPageRoutingModule,
    ErrorMsgModule,
  ],
})
export class StartPageModule {}
