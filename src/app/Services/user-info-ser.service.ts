import { Injectable } from '@angular/core';
import { LoggedUserInfo } from '../Data/logged-user-info';

@Injectable({
  providedIn: 'root'
})
export class UserInfoSerService {

  userInfo!: LoggedUserInfo;
  constructor() {}

  setLoggedUser(inputuserInfo: LoggedUserInfo) {
    this.userInfo = inputuserInfo;
  }

  getLoggesUser() {
    return this.userInfo;
  }
}
