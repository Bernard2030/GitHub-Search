export class Users {
  constructor(public name:string, public html_url:string, public login:string, public repos_url:string, public followers_url:string, public following_url:string, public avatar_url:string, public url:string){
    this.name = name;
    this.html_url = html_url;
    this.login = login;
    this.followers_url = followers_url;
    this.url = url;
    this.repos_url = repos_url;
    this.avatar_url = avatar_url;
    this.following_url = following_url;
  }
}
