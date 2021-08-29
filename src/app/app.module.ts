import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { GithubsearchFormComponent } from './githubsearch-form/githubsearch-form.component';
import { GithubsearchProfileComponent } from './githubsearch-profile/githubsearch-profile.component';
import { GithubsearchReposComponent } from './githubsearch-repos/githubsearch-repos.component';
import {GithubServiveSearvice } from './githubServiveSearvice';

@NgModule({
  declarations: [
    AppComponent,
    GithubsearchFormComponent,
    GithubsearchProfileComponent,
    GithubsearchReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
