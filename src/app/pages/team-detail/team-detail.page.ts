import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballApiService } from '../../services/football-api.service';
import { Team } from '../../models/Team';
import { NavController, ToastController } from '@ionic/angular';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {
  //team
  teamId: string;
  team: Team = {};
  name: string;
  logo: string;
  league: string;
  //player
  playersList: Player[] = [];
  // eslint-disable-next-line max-len
  constructor(private ar: ActivatedRoute, private api: FootballApiService, private navCtrl: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.teamId = this.ar.snapshot.paramMap.get('id');
    this.fetchTeamById(this.teamId);
    this.fetchListPlayers(this.teamId);
  }
  fetchTeamById(id: string){
    this.api.getTeamById(id).subscribe(data => {
      this.team = data;
      console.log(this.team);
    });
  }
  editTeam(id: string,name: string, logo: string, league: string){
    this.api.editTeam(id,name,logo,league).subscribe(newTeam =>{
      console.log(newTeam);
    });
  }
  fetchListPlayers(id: string){
    this.api.getPlayersListByTeam(id).subscribe((player: Player[]) =>{
      this.playersList = player;
      console.log(this.playersList);
    });
  }
  submit(){
    this.editTeam(this.teamId,this.name,this.logo,this.league);
    this.navCtrl.back();
    this.presentToast('Team edited');
  }
  async presentToast(message){
    const toast = await this.toastController.create({
      message ,
      duration : 2000
    });
    toast.present();
  }
}
