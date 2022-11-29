import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoSerService } from 'src/app/Services/user-info-ser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userInfo: UserInfoSerService,
              private router: Router) {
   if(!this.userInfo?.getLoggesUser()?.userName){
    this.router.navigateByUrl("/login");
   }

   }

  ngOnInit(): void {
  }

}
