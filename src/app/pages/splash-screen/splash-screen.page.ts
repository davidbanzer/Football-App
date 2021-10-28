import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(public router: Router) {
    this.goToTeamsPage();
  }

  ngOnInit() {
  }
  goToTeamsPage(){
    setTimeout(() => {
      this.router.navigateByUrl('tabs/teams',{replaceUrl:true});
    }, 2000);
  }
}
