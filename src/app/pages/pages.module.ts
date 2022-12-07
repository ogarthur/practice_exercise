import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { ParkingComponent } from './parking/parking.component';


@NgModule({
  declarations: [
    WeatherComponent,
    HomeComponent,
    ParkingComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ],
  exports : [
    WeatherComponent,
    HomeComponent,
    ParkingComponent
  ]
})
export class PagesModule { }
