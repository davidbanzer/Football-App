import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { TeamsPageModule } from '../teams/teams.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'teams',
        loadChildren: () => import('../teams/teams.module').then( m => m.TeamsPageModule)
      },
      {
        path: 'players',
        loadChildren: () => import('../players/players.module').then( m => m.PlayersPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
