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
  name: string;
  avatar: string;
  teamId: string;
  nameSearch: string;
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
  submit(){
    this.api.addPlayer(this.name, this.avatar, this.teamId);
    this.name = '';
    this.avatar = '';
    this.teamId = '';
  }
  goToPlayerDetail(id: string){
    this.router.navigateByUrl('player-detail/'+id);
  }
  goToEditPlayer(id: string){
    this.router.navigateByUrl('edit-player/'+id);
  }
  deletePlayer(id: string){
    this.api.deletePlayer(id).subscribe(()=>{
      this.playersList = this.playersList.filter(player => player.id !== id);
    });
  }
  search(){
    this.api.getPlayerBySearch(this.nameSearch).subscribe((player: Player[])=>{
      this.playersList = [];
      this.playersList = player;
    });
  }

}
