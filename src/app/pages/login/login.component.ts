import { Router } from '@angular/router';
import { CacheService } from './../../core/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Res } from '@app/shared/types/commonTypes';
import { validateForm } from '@shared/utils/utils';
import { LoginService } from './login.service';
import { environment } from '@env/environment';
import { _local } from '@app/shared/utils/Storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  systemName = environment.systemName;
  loginForm!: FormGroup;
  showPwd: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private cache: CacheService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      code: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  login(): void {
    validateForm(this.loginForm.controls);
    if (this.loginForm.valid) {
      const { code, password } = this.loginForm.value;
      this.service.login({ code, password }).subscribe((res: Res) => {
        _local.set('token', res.data.token, res.data.expires);
        this.router.navigateByUrl('/index');
      });
    }
  }
}
