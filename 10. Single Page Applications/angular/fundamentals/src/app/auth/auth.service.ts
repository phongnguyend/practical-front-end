import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { IUser } from '../user/user.model'
import { UserManager, User, WebStorageStateStore } from 'oidc-client';
import { Constants } from '../constants';

@Injectable()
export class AuthService {

  private _userManager: UserManager;
  private _user: User;

  constructor(private httpClient: HttpClient) {
    var config = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}assets/oidc-login-redirect.html`,
      scope: 'openid profile ClassifiedAds.WebAPI',
      response_type: 'id_token token',
      post_logout_redirect_uri: `${Constants.clientRoot}?postLogout=true`,
      userStore: new WebStorageStateStore({ store: window.localStorage })
    };
    this._userManager = new UserManager(config);
  }

  loadUser(){
    var promise =  this._userManager.getUser();
    promise.then(user => {
      if (user && !user.expired) {
        this._user = user;
      }
    });
    return promise;
  }

  login(): Promise<any> {
    return this._userManager.signinRedirect();
  }

  logout(): Promise<any> {
    return this._userManager.signoutRedirect();
  }

  isLoggedIn(): boolean {
    return this._user && this._user.access_token && !this._user.expired;
  }

  getAccessToken(): string {
     return this._user ? this._user.access_token : '';
  }

  signoutRedirectCallback(): Promise<any> {
    return this._userManager.signoutRedirectCallback();
  }

  getCurrentUser(): IUser{
    return {
      id: this._user.profile.sub,
      userName: "xxx",
      firstName: 'John',
      lastName: 'Papa'
    }
  }

  isAuthenticated() {
    return this.isLoggedIn()
  }

  updateCurrentUser(firstName:string, lastName:string) {
    
  }
}