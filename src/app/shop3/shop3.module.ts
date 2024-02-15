import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { Shop3PageRoutingModule } from './shop3-routing.module';

import { Shop3Page } from './shop3.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shop3PageRoutingModule
  ],
  declarations: [Shop3Page]
})
export class Shop3PageModule {}
