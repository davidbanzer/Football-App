import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/Team';
import { Player } from '../models/Player';
import { League } from '../models/League';

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
  getTeamByLeague(id: string){
    return this.http.get<Team[]>('http://localhost:3000/teams?league='+id);
  }
  //players
  getPlayersList(){
    return this.http.get<Player[]>('http://localhost:3000/players');
  }
  getPlayersListByTeam(id: string){
    return this.http.get<Player[]>('http://localhost:3000/players?teamId='+id);
  }
  getPlayerById(id: string){
    return this.http.get<Player>('http://localhost:3000/players/'+id);
  }
  addPlayer(name: string, avatar: string, teamId: string){
    const player = {
      name,
      avatar,
      teamId
    };
    return this.http.post<Player>('http://localhost:3000/players',player);
  }
  deletePlayer(id: string){
    return this.http.delete('http://localhost:3000/players/'+id);
  }
  editPlayer(id: string, name: string, avatar: string, teamId: string){
    const player ={
      name,
      avatar,
      teamId
    };
    return this.http.put<Team>('http://localhost:3000/players/'+id,player);
  }
  //leageus
  getLeaguesList(){
    return this.http.get<League[]>('http://localhost:3000/leagues');
  }
  getLeagueById(id: string){
    return this.http.get<League>('http://localhost:3000/leagues/'+id);
  }
}
