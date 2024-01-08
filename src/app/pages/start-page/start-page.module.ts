import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { StartPageRoutingModule } from './start-page-routing.module';

@NgModule({
  declarations: [StartPageComponent],
  imports: [CommonModule, StartPageRoutingModule],
})
export class StartPageModule {}
