import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballApiService } from '../../services/football-api.service';
import { Team } from '../../models/Team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {
  teamId: string;
  team: Team = {};
  constructor(private ar: ActivatedRoute, private api: FootballApiService) { }

  ngOnInit() {
    this.teamId = this.ar.snapshot.paramMap.get('id');
    this.fetchTeamById(this.teamId);
  }
  fetchTeamById(id: string){
    this.api.getTeamById(id).subscribe(data => {
      this.team = data;
      console.log(this.team);
    });
  }

}
