import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Team } from '../../models/Team';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teamsList: Team[] = [];

  // eslint-disable-next-line max-len
  constructor(private api: FootballApiService, private router: Router, private ar: ActivatedRoute) {
    this.ar.params.subscribe(data => {
      this.fetchTeamsList();
      });
  }

  ngOnInit() {
  }

  fetchTeamsList(){
    this.api.getTeamsList().subscribe((teams: Team[]) =>{
      this.teamsList = teams;

    });
  }
  goToTeamDetail(id: string){
    this.router.navigateByUrl('team-detail/'+id);
  }
  goToEditTeam(id: string){
    this.router.navigateByUrl('edit-team/'+id);
  }
  deleteTeam(id: string){
    this.api.deleteTeam(id).subscribe(() => {
        this.teamsList = this.teamsList.filter(team => team.id !== id);
    });
  }
}
