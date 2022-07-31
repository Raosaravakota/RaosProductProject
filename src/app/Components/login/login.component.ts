import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoggedUserInfo } from 'src/app/Data/logged-user-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
  username: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
});

submit() {
  if (this.form.valid) {
    const user: LoggedUserInfo = {
      userName: this.form.controls['username'].value,
      passWord: this.form.controls['password'].value
    };
  }
}
@Input() error: string | null | undefined;

@Output() submitEM = new EventEmitter();}
