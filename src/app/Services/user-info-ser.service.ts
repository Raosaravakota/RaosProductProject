import { Injectable } from '@angular/core';
import { LoggedUserInfo } from '../../assets/data/logged-user-info';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoSerService {

  userInfo!: LoggedUserInfo;
  baseURL: string = "http://localhost:7081/";
  constructor(private http:HttpClient) {}

  setLoggedUser(inputuserInfo: LoggedUserInfo) {
    this.userInfo = inputuserInfo;
  }

  getLoggesUser() {
    return this.userInfo;
  }

  LoginUser(userInfo: LoggedUserInfo): Observable<LoggedUserInfo> {
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(userInfo);
    return this.http.post<LoggedUserInfo>(this.baseURL+"/​api​/UsersInfo​/LoginUserInfo",body,{'headers':headers})
  }
}
