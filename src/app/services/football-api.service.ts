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
    return this.http.get<Team[]>('http://localhost:3000/teams');
  }
  addTeam(name: string, logo: string, league: string){
    const team = {
      name,
      logo,
      league
    };
    return this.http.post<Team>('http://localhost:3000/teams',team);
  }
  editTeam(id: string, name: string, logo: string, league: string){
    const team ={
      name,
      logo,
      league
    };
    return this.http.put<Team>('http://localhost:3000/teams/'+id,team);
  }
  deleteTeam(id: string){
    return this.http.delete('http://localhost:3000/teams/'+id);
  }
  getTeamById(id: string){
    return this.http.get<Team>('http://localhost:3000/teams/'+id);
  }
  //players
  getPlayersList(){
    return this.http.get<Player[]>('http://localhost:3000/players');
  }
  getPlayersListByTeam(id: string){
    return this.http.get<Player[]>('http://localhost:3000/players?teamId='+id);
  }
  addPlayer(name: string, avatar: string, teamId: string){
    const player = {
      name,
      avatar,
      teamId
    };
    return this.http.post<Player>('http://localhost:3000/players',player);
  }
}
