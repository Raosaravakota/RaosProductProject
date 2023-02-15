import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedUserInfo } from 'src/assets/data/logged-user-info';
import { UserInfoSerService } from 'src/app/Services/user-info-ser.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userInfo: UserInfoSerService,
             private routerInfo:Router) { }

  @Output() loginUserName = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submit() {

    if (this.form.valid) {
      const user: LoggedUserInfo = {
        userName: this.form.controls['username'].value,
        passWord: this.form.controls['password'].value
      };
      this.userInfo.setLoggedUser(user);

      this.userInfo.LoginUser(user);

    }
  }
  setUserName(){
   return this.loginUserName.emit(this.userInfo.getLoggesUser().userName);
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
}
