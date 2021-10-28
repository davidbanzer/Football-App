import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Player } from '../../models/Player';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.page.html',
  styleUrls: ['./edit-player.page.scss'],
})
export class EditPlayerPage implements OnInit {
  playerId: string;
  player: Player = {};
  name: string;
  avatar: string;
  teamId: string;
  // eslint-disable-next-line max-len
  constructor(private ar: ActivatedRoute, private api: FootballApiService, private navCtrl: NavController, public toastController: ToastController) {
  }

  ngOnInit() {
    this.playerId = this.ar.snapshot.paramMap.get('id');
    this.fetchPlayerById(this.playerId);
  }
  fetchPlayerById(id: string){
    this.api.getPlayerById(id).subscribe((player: Player) => {
      this.player = player;
      console.log(this.player);
    });
  }
  editPlayer(id: string,name: string, avatar: string, team: string){
    this.api.editPlayer(id,name,avatar,team).subscribe(newPlayer =>{
      console.log(newPlayer);
    });
  }
  submit(){
    this.editPlayer(this.playerId,this.name, this.avatar, this.teamId);
    this.navCtrl.back();
  }
}
