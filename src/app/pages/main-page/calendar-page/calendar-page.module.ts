import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformerModule } from 'src/app/util/pipe/transformer/transformer.module';
import { ImageUrlModule } from 'src/app/util/pipe/image-url/image-url.module';
import { SvgSourceModule } from 'src/app/util/pipe/svg-source/svg-source.module';
import { CalendarPageComponent } from './calendar-page.component';
import { CalendarPageRoutingModule } from './calendar-page-routing.module';

@NgModule({
  declarations: [CalendarPageComponent],
  imports: [
    CommonModule,
    TransformerModule,
    ImageUrlModule,
    SvgSourceModule,
    CalendarPageRoutingModule,
  ],
})
export class CalendarPageModule {}
