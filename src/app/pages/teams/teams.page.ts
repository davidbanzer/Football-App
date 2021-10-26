import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../../models/Team';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teamsList: Team[] = [];
  constructor(private api: FootballApiService, private router: Router) { }

  ngOnInit() {
    this.fetchTeamsList();
  }

  fetchTeamsList(){
    this.api.getTeamsList().subscribe(data => {
      if(!data){
        console.log(Error);
      } else {
        this.teamsList = data;
        console.log(this.teamsList);
      }
    });
  }
  goToTeamDetail(id: string){
    this.router.navigateByUrl('team-detail/'+id);
  }
}
