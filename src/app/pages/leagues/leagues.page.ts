import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { League } from '../../models/League';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
  leaguesList: League[] = [];
  // eslint-disable-next-line max-len
  constructor(private api: FootballApiService, private router: Router, private ar: ActivatedRoute,  public toastController: ToastController) {
    this.ar.params.subscribe(data => {
      this.fetchLeaguesList();
      });
  }

  ngOnInit() {
  }
  fetchLeaguesList(){
    this.api.getLeaguesList().subscribe((league: League[]) => {
      this.leaguesList = league;
    });
  }
  goToLeagueDetail(id: string){
    this.router.navigateByUrl('league-detail/'+id);
  }
}
