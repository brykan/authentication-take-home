import { IonicAuthOptions } from '@ionic-enterprise/auth';
import { isPlatform } from '@ionic/angular';

export const mobileConfig: IonicAuthOptions = {
  clientID: '4geagm2idmq87fii15dq9toild',
  clientSecret: '124dch1p6824ppuef8o71unk14d4pt3p5hnntofvu21i2m960r1g',
  platform:  'capacitor',
  scope: 'openid email profile',
  authConfig: 'cognito',
  discoveryUrl: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_YU8VQe29z/.well-known/openid-configuration',
  audience: '',
  redirectUri:  'msauth://login',
  logoutUrl: 'msauth://login',
  logLevel: 'DEBUG',
};

export const webConfig: IonicAuthOptions = {
  clientID: '4geagm2idmq87fii15dq9toild',
  clientSecret: '124dch1p6824ppuef8o71unk14d4pt3p5hnntofvu21i2m960r1g',
  platform:  'web',
  scope: 'openid email profile',
  authConfig: 'cognito',
  discoveryUrl: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_YU8VQe29z/.well-known/openid-configuration',
  audience: '',
  redirectUri: 'http://localhost:8100/login',
  logoutUrl: 'http://localhost:8100/login',
  logLevel: 'DEBUG',
};
