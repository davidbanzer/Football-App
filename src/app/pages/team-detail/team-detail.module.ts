import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamDetailPageRoutingModule } from './team-detail-routing.module';

import { TeamDetailPage } from './team-detail.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TeamDetailPage]
})
export class TeamDetailPageModule {}
