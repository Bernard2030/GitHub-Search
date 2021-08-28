import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubsearchReposComponent } from './githubsearch-repos.component';

describe('GithubsearchReposComponent', () => {
  let component: GithubsearchReposComponent;
  let fixture: ComponentFixture<GithubsearchReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubsearchReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubsearchReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
