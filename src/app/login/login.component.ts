import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Res } from '@app/types/commonTypes';
import { validateForm } from '@app/utils/utils';
import { LoginService } from './login.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  systemName = environment.systemName;
  loginForm!: FormGroup;
  showPwd: Boolean = false;

  constructor(private fb: FormBuilder, private service: LoginService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    validateForm(this.loginForm.controls);
    if (this.loginForm.valid) {
      const { userName, password } = this.loginForm.value;
      this.service.login({ userName, password }).subscribe((res: Res) => {
        console.log('res: ', res);
      });
    }
  }
}
