import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email!: any;
  password!: any;
  constructor(private route: Router){}
  onSubmit(data: any) {
    localStorage.setItem('email', data.form.value.email);
    this.route.navigate(['home']);
  }
}
