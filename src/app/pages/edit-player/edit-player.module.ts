import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPlayerPageRoutingModule } from './edit-player-routing.module';

import { EditPlayerPage } from './edit-player.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPlayerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditPlayerPage]
})
export class EditPlayerPageModule {}
