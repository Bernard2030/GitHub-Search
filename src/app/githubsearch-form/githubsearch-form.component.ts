import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GithubsearchReposComponent } from '../githubsearch-repos/githubsearch-repos.component';
import { GithubServiceService } from './../../app/github-service.service';

@Component({
  selector: 'app-githubsearch-form',
  templateUrl: './githubsearch-form.component.html',
  styleUrls: ['./githubsearch-form.component.css']
})
export class GithubsearchFormComponent implements OnInit {
  
  userName: any;

  @Output() userSearchEmit = new EventEmitter<string>()
  

  constructor() { }
  search (){
    this.userSearchEmit.emit(this.userName)
  }

  ngOnInit(): void {
  }

}
