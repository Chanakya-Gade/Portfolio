import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppFooter } from './footer/footer.component';
import { AppHeader } from './header/header.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { AppExperience } from '../experience/experience.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppFooter, AppHeader,    AppExperience],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    TimelineModule,
    CardModule,
    FlexLayoutModule
  ],
  exports: [AppFooter, AppHeader, AppExperience],
  providers: []
})
export class SharedModule { }
