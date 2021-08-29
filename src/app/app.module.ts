import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubsearchFormComponent } from './githubsearch-form/githubsearch-form.component';
import { GithubsearchProfileComponent } from './githubsearch-profile/githubsearch-profile.component';
import { GithubsearchProfileCardComponent } from './githubsearch-profile-card/githubsearch-profile-card.component';
import { GithubsearchProfileDataComponent } from './githubsearch-profile-data/githubsearch-profile-data.component';
import { GithubsearchReposComponent } from './githubsearch-repos/githubsearch-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    GithubsearchFormComponent,
    GithubsearchProfileComponent,
    GithubsearchProfileCardComponent,
    GithubsearchProfileDataComponent,
    GithubsearchReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
