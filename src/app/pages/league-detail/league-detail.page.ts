import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { FootballApiService } from '../../services/football-api.service';
import { League } from '../../models/League';
import { Team } from '../../models/Team';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.page.html',
  styleUrls: ['./league-detail.page.scss'],
})
export class LeagueDetailPage implements OnInit {
  //league
  league: League = {};
  leagueId: string;
  //team
  teamsList: Team[] = [];
  name: string;
  logo: string;
  // eslint-disable-next-line max-len
  constructor(private ar: ActivatedRoute, private api: FootballApiService, private navCtrl: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.leagueId = this.ar.snapshot.paramMap.get('id');
    this.fetchLeagueById(this.leagueId);
    this.fetchTeamByLeague(this.leagueId);
  }
  fetchLeagueById(id: string){
    this.api.getLeagueById(id).subscribe((league: League)=>{
      this.league = league;
    });
  }
  fetchTeamByLeague(id: string){
    this.api.getTeamByLeague(this.leagueId).subscribe((team: Team[]) =>{
      this.teamsList = team;
    });
  }
  addTeam(name: string, logo: string, league: string){
    this.api.addTeam(name,logo,league).subscribe(newTeam =>{
      this.teamsList.push(newTeam);
    });
  }
  submit(){
    this.addTeam(this.name,this.logo,this.leagueId);
    this.name = '';
    this.logo = '';
  }
}
