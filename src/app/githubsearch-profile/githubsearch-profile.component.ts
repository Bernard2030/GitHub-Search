import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubsearch-profile',
  templateUrl: './githubsearch-profile.component.html',
  styleUrls: ['./githubsearch-profile.component.css']
})
export class GithubsearchProfileComponent implements OnInit {


  repos: any[];
  username: string;
  constructor(private profileservice: ProfileService) {
    this.profileservice.getdata().subscribe((profile: any[]) => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });
  }
  findProfile() {
    this.profileservice.updateProfile(this.username);
    this.profileservice.getdata().subscribe((profile: any[]) => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileservice.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });



  // @Input() githubSearchProfile:any;


  ngOnInit() {
  }

}
}
