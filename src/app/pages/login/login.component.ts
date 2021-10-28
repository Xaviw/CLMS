import { CacheService } from './../../core/services/cache.service';
import { CommonService } from '@app/core/services/common.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateForm } from '@shared/utils/utils';
import { LoginService } from './login.service';
import { environment } from '@env/environment';
import { _local } from '@app/shared/utils/Storage';
import { CheckInInfo } from '@app/shared/types/commonTypes';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  systemName = environment.systemName;
  loginForm!: FormGroup;
  showPwd: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router,
    private common: CommonService,
    private cache: CacheService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      code: [null, [Validators.required]],
      password: [_local.get('password'), [Validators.required]],
      remember: [true],
    });
  }

  login(): void {
    validateForm(this.loginForm.controls);
    if (this.loginForm.valid) {
      const { code, password } = this.loginForm.value;
      this.service.login({ code, password }).subscribe((res: any) => {
        _local.set('token', res.token, res.expires);

        this.router.navigateByUrl('/index');
      });
    }
  }
}
