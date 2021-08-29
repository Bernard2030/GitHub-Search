import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubsearch-profile',
  templateUrl: './githubsearch-profile.component.html',
  styleUrls: ['./githubsearch-profile.component.css']
})
export class GithubsearchProfileComponent implements OnInit {

  @Input() githubSearchProfile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
