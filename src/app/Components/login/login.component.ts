import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    this.submitEM.emit(this.form.value);
  }
}
@Input() error: string | null | undefined;

@Output() submitEM = new EventEmitter();}
