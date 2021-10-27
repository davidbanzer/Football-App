import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Team } from '../../models/Team';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.page.html',
  styleUrls: ['./edit-team.page.scss'],
})
export class EditTeamPage implements OnInit {
  //team
  teamId: string;
  team: Team = {};
  name: string;
  logo: string;
  league: string;
  // eslint-disable-next-line max-len
  constructor(private ar: ActivatedRoute, private api: FootballApiService, private navCtrl: NavController, public toastController: ToastController) { }

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
  editTeam(id: string,name: string, logo: string, league: string){
    this.api.editTeam(id,name,logo,league).subscribe(newTeam =>{
      console.log(newTeam);
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
