import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: any;
  fieldRequired: string = "This field is required"

  form: FormGroup = new FormGroup({
    candidatename: new FormControl(''),
    surName: new FormControl(''),
    gender:new FormControl('',Validators.required),
    education:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    gmail:new FormControl('',Validators.required),


    fatherName:new FormControl('',Validators.required),
    motherName :new FormControl('',Validators.required),
    fatherMobileNo :new FormControl('',Validators.required),
    fatherAge :new FormControl('',Validators.required),
    userName:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
});

submit() {
  if (this.form.valid) {
    this.submitEM.emit(this.form.value);
  }
}
@Input() error: string | null | undefined;

@Output() submitEM = new EventEmitter();

checkValidation(input: string){
  const validation = this.registerForm.get(input).invalid && (this.registerForm.get(input).dirty || this.registerForm.get(input).touched)
  return validation;
}
emaiErrors() {
  return this.registerForm.get('email').hasError('required') ? 'This field is required' :
    this.registerForm.get('email').hasError('pattern') ? 'Not a valid emailaddress' :''
}
}


