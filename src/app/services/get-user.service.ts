import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment } from '../../environments/environment';
import {GitUser} from '../classses/git-user';
import { Repo } from '../classses/repo';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  user: GitUser[] = [];
  repo: Repo[] = [];

  _URL = 'https://api.github.com/users/'
  token = '?access_token= ff1c45270a12d30ea78c10c6b921452120917df8'

  constructor(private http: HttpClient) {
  }

  searchMyUser(searchTerm: string) {
  // tslint:disable-next-line:class-name
  interface data {
  login: string;
  avatar_url: string;
  following: string;
  followers: string;
  public_repos: string;
  }

  return new Promise((resolve, reject) => {
  this.user = [];
  // tslint:disable-next-line:max-line-length
  /*this.http.get<data>( environment._URL + searchTerm + environment.token).toPromise().then(*/
  this.http.get<data>( this._URL + searchTerm + this.token).toPromise().then(
  (results) => {
  // @ts-ignore
  this.user.push(results);
  resolve();
  },
  (error) => {
  reject();
  }
  );
  });
}

searchMyRepo(repoLink: string) {
  // tslint:disable-next-line:class-name
  interface data {
    name: any;
    created_at: Date;
    language: any;
  }

  return new Promise((resolve, reject) => {
  this.repo = [];
  // tslint:disable-next-line:max-line-length
  /*this.http.get<data>( environment._URL + searchTerm + environment.token).toPromise().then(*/
  this.http.get<data>(repoLink).toPromise().then(
  (results) => {
  // @ts-ignore
  this.repo.push(results);
  resolve();
  },
  (error) => {
  reject();
  }
  );
  });
}
}
