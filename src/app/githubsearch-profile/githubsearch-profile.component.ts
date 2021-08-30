import { Component, Input, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { HttpClient } from '@angular/common/http';
import {Users} from '../users'

@Component({
  selector: 'app-githubsearch-profile',
  templateUrl: './githubsearch-profile.component.html',
  styleUrls: ['./githubsearch-profile.component.css']
})
export class GithubsearchProfileComponent implements OnInit {

  userName:string ;
  profile:any ;
  repos:any;






 constructor(private GithubServiceService: GithubServiceService) {
    this.GithubServiceService.getdata().subscribe((profile: any[]) => {
      console.log(profile);
      this.profile = profile;
    });
    this.GithubServiceService.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });
  }
  ngOnInit(): void {
    // throw new Error('Use the correct Format.');
  }
  findProfile(userSearchEmit: string) {
    this.GithubServiceService.updateProfile(userSearchEmit);
    this.GithubServiceService.getdata().subscribe((profile: any[]) => {
      console.log(profile);
      this.profile = profile;
    });
    this.GithubServiceService.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });
  }
  githubSearch(userSearchEmit: any){
    console.log(userSearchEmit)
    this.findProfile(userSearchEmit)
  }

}
