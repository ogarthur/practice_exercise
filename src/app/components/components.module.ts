import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import {RouterModule} from '@angular/router';

import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    SimpleCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    SimpleCardComponent
  ]
})
export class ComponentsModule { }
