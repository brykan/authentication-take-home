import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthenticationService) {

  }

  ngOnInit() {
  }

  async handleLogin(){
    await this.auth.login();
    const token = await this.auth.getIdToken();
    if(token) {
      this.router.navigate(['/home']);
    }else{
      console.log('failed to log in');
    }
  }
}
