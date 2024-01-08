import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPageComponent } from './author-page.component';
import { AuthorPageRoutingModule } from './author-page-routing.module';

@NgModule({
  declarations: [AuthorPageComponent],
  imports: [CommonModule, AuthorPageRoutingModule],
})
export class AuthorPageModule {}
