import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MissiondetailsComponent } from './mission/missiondetails.component';
import { MissionComponent } from './missiondetails/missiondetails.component';

@NgModule({
  declarations: [AppComponent, MissionComponent, MissiondetailsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
