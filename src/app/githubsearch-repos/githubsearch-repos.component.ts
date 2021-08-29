import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-githubsearch-repos',
  templateUrl: './githubsearch-repos.component.html',
  styleUrls: ['./githubsearch-repos.component.css']
})
export class GithubsearchReposComponent implements OnInit {

  repos:any;



  // @Input() githubsearchRepos:any[];
 constructor(private profileName:GithubServiceService) {
   this.profileName = profileName;
  }

  getProfileRepos(){}

  ngOnInit(): void {
    this.profileName.getProfileRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos;
    });
  }

}
