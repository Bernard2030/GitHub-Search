import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  public GithubUserQuery: string;
  public GithubProfile:any;
  public GithubRepos:any[];
  public errorMessage:string;




  constructor(privategithubService:GithubServiceService) { }

  public searchUser(){

  }

  ngOnInit(): void {
  }

}

