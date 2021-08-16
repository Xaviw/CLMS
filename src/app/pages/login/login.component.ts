import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Res } from '@app/shared/types/commonTypes';
import { validateForm } from '@shared/utils/utils';
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
      code: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    validateForm(this.loginForm.controls);
    if (this.loginForm.valid) {
      const { code, password } = this.loginForm.value;
      this.service.login({ code, password }).subscribe((res: Res) => {
        console.log('res: ', res);
      });
    }
  }
}
