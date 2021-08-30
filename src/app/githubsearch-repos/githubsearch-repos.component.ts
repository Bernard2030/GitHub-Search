import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-githubsearch-repos',
  templateUrl: './githubsearch-repos.component.html',
  styleUrls: ['./githubsearch-repos.component.css']
})
export class GithubsearchReposComponent implements OnInit {
  getdata() {
    throw new Error('Method not implemented.');
  }

  repos:any;
  


  constructor(private GithubServiceService: GithubServiceService) {
    {
      this.GithubServiceService = GithubServiceService;
    }
  }
  getProfileRepos() {}

  ngOnInit() {
    this.GithubServiceService.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;

    });
  }

}
