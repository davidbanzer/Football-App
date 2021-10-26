import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {

  constructor(private http: HttpClient) {}
  //teams
  getTeamsList(){
    return this.http.get<Team[]>('https://footbal-api.herokuapp.com/teams');
  }
}
