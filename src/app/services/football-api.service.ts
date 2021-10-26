import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/Team';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {

  constructor(private http: HttpClient) {}
  //teams
  getTeamsList(){
    return this.http.get<Team[]>('https://footbal-api.herokuapp.com/teams');
  }
  getTeamById(id: string){
    return this.http.get<Team>('https://footbal-api.herokuapp.com/teams/'+id);
  }
  //players
  getPlayersList(){
    return this.http.get<Player[]>('https://footbal-api.herokuapp.com/players');
  }
}
