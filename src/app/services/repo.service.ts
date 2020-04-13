import { Injectable } from '@angular/core';
import { Repo } from '../classses/repo'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RepoService {

  user: Repo[] = [];
  _URL = 'https://api.github.com/users/'
  token = '?access_token= ff1c45270a12d30ea78c10c6b921452120917df8'

  constructor(private http: HttpClient) {
  }

  searchMyRepo(searchTerm: string) {
    // tslint:disable-next-line:class-name
    interface data {
    name: string;
    created_a: string;
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
    console.log(results)
    resolve();
    },
    (error) => {
    reject();
    }
    );
    });
  }
}
