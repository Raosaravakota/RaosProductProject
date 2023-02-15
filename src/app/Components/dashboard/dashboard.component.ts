import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  photoCounts:number=25;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showPhotos(){
    //this.router.navigateByUrl("dashboard/viewPhotos");

  }

}
