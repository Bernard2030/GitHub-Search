import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubsearch-profile-data',
  templateUrl: './githubsearch-profile-data.component.html',
  styleUrls: ['./githubsearch-profile-data.component.css']
})
export class GithubsearchProfileDataComponent implements OnInit {
  @Input() githubSearchProfile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
