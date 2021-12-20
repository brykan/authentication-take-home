import { Injectable } from '@angular/core';
import { AuthResult, IonicAuth } from '@ionic-enterprise/auth';
import { isPlatform } from '@ionic/angular';
import { mobileConfig, webConfig } from '../../../environments/authentication-config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth{

  constructor() {
    const config = isPlatform('hybrid') ? mobileConfig : webConfig;
    super(config);
  }
  public async onLoginSuccess(result: AuthResult): Promise<void> {
      console.log('howdy');
  }
  // async login(): Promise<void> {
  //   await super.login();
  // }
}
