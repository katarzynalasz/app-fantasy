
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { RolesFlags } from '../roles-flags.enum';
import { Login } from '../login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    const remember = this.localStorageService.getRemember();

    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      remember: new FormControl(remember),
    });
  }

  login() {
    const login = new Login({
      login: this.loginForm.value.userName,
      password: this.loginForm.value.password,
    });

    this.authService.login(login).subscribe(
      user => {
        this.authService.setUser(user, this.loginForm.value.remember);
        if (this.returnUrl.length > 1) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.navigateToDefaultRouteForRole(user);
        }
      },
      error => this.showErrorToast(error)
    );
  }

  private navigateToDefaultRouteForRole(user: User) {
    if (user.roles & RolesFlags.User) {
      this.router.navigate(['/home']);
    } else if (user.roles & RolesFlags.Administrator) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate([this.returnUrl]);
    }
  }
}
