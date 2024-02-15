import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { Shop2PageRoutingModule } from './shop2-routing.module';

import { Shop2Page } from './shop2.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Shop2PageRoutingModule
  ],
  declarations: [Shop2Page]
})
export class Shop2PageModule {}
