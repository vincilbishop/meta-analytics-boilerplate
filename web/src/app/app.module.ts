import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { DefaultLayoutComponent } from './common/layout/default-layout/default-layout.component';
import { DxChartModule } from 'devextreme-angular/ui/chart';

@NgModule({
  declarations: [AppComponent, HomeComponent, DefaultLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, DxChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
