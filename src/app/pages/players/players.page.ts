import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FootballApiService } from '../../services/football-api.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  playersList: Player[] = [];
  // eslint-disable-next-line max-len
  constructor(private api: FootballApiService, private router: Router, private ar: ActivatedRoute,  public toastController: ToastController) {
    this.ar.params.subscribe(data => {
      this.fetchPlayersList();
      });
  }

  ngOnInit() {
  }

  fetchPlayersList(){
    this.api.getPlayersList().subscribe((player: Player[]) => {
      this.playersList = player;
    });
  }

}
