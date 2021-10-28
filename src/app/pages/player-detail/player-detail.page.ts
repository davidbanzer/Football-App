import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FootballApiService } from '../../services/football-api.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
})
export class PlayerDetailPage implements OnInit {
  playerId: string;
  player: Player = {};
  // eslint-disable-next-line max-len
  constructor(private ar: ActivatedRoute, private api: FootballApiService, private navCtrl: NavController) { }

  ngOnInit() {
    this.playerId = this.ar.snapshot.paramMap.get('id');
    this.fetchPlayerById(this.playerId);
  }
  fetchPlayerById(id: string){
    this.api.getPlayerById(id).subscribe( (player: Player)=>{
      this.player = player;
    });
  }

}
