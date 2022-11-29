import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoSerService } from 'src/app/Services/user-info-ser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  userName:any;

  constructor(private router: Router,
    private userInfo: UserInfoSerService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  setUserName(){
    if(!this.userInfo?.getLoggesUser()?.userName){
      this.userName=this.userInfo.getLoggesUser()?.userName
    }

  };
  
  logOut(){
    
  }
}
