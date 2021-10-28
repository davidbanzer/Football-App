import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerDetailPageRoutingModule } from './player-detail-routing.module';

import { PlayerDetailPage } from './player-detail.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlayerDetailPage]
})
export class PlayerDetailPageModule {}
