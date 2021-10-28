import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'team-detail/:id',
    loadChildren: () => import('./pages/team-detail/team-detail.module').then( m => m.TeamDetailPageModule)
  },
  {
    path: 'edit-team/:id',
    loadChildren: () => import('./pages/edit-team/edit-team.module').then( m => m.EditTeamPageModule)
  },
  {
    path: 'player-detail/:id',
    loadChildren: () => import('./pages/player-detail/player-detail.module').then( m => m.PlayerDetailPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/players/players.module').then( m => m.PlayersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
