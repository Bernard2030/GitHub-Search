import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {


  public GithubsearchProfile:any;
  public GithubsearchRepos:any[];
  public errorMessage:string;




  constructor(privategithubService:GithubServiceService) { }

  public searchUser(){
    // to get github Profile
    this.githubService.getProfile(this.githubUserQuery).subscribe(next(data)=>{
      this.githubProfile = data;
    }, error(error)=>{
      this.errorMessage =error;
    });
    // to get github Repositories
    this.githubService.getRepos(githubUserQuery).subscribe(next(data)=>{
      this.githubRepos = data;
    }, error(error)=>{
      this.errorMessage =error;
    })

  }

  ngOnInit(): void {
  }

}

