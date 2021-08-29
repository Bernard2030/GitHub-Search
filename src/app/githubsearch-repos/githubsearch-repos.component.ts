import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubsearch-repos',
  templateUrl: './githubsearch-repos.component.html',
  styleUrls: ['./githubsearch-repos.component.css']
})
export class GithubsearchReposComponent implements OnInit {

  @Input() githubsearchRepos:any[];
 constructor() { }

  ngOnInit(): void {
  }

}
