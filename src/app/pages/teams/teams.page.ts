import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Team } from '../../models/Team';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teamsList: Team[] = [];
  name: string;
  logo: string;
  league: string;
  // eslint-disable-next-line max-len
  constructor(private api: FootballApiService, private router: Router, private ar: ActivatedRoute,  public toastController: ToastController) {
    this.ar.params.subscribe(data => {
      this.fetchTeamsList();
      });
  }

  ngOnInit() {
  }

  fetchTeamsList(){
    this.api.getTeamsList().subscribe((teams: Team[]) =>{
      this.teamsList = teams;

    });
  }
  goToTeamDetail(id: string){
    this.router.navigateByUrl('team-detail/'+id);
  }
  goToEditTeam(id: string){
    this.router.navigateByUrl('edit-team/'+id);
  }
  deleteTeam(id: string){
    this.api.deleteTeam(id).subscribe(() => {
        console.log('borrado');
        this.teamsList = this.teamsList.filter(team => team.id !== id);
    });
  }
  addTeam(name: string, logo: string, league: string){
    this.api.addTeam(name,logo,league).subscribe(newTeam =>{
      this.teamsList.push(newTeam);
    });
  }
  submit(){
    this.addTeam(this.name,this.logo,this.league);
    this.name = '';
    this.logo = '';
    this.league = '';
    this.presentToast('Team added');
  }
  async presentToast(message){
    const toast = await this.toastController.create({
      message ,
      duration : 2000
    });
    toast.present();
  }
}
