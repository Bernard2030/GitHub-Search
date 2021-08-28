import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubsearchProfileDataComponent } from './githubsearch-profile-data.component';

describe('GithubsearchProfileDataComponent', () => {
  let component: GithubsearchProfileDataComponent;
  let fixture: ComponentFixture<GithubsearchProfileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubsearchProfileDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubsearchProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
