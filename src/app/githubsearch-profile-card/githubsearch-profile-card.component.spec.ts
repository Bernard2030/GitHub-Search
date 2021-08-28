import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubsearchProfileCardComponent } from './githubsearch-profile-card.component';

describe('GithubsearchProfileCardComponent', () => {
  let component: GithubsearchProfileCardComponent;
  let fixture: ComponentFixture<GithubsearchProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubsearchProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubsearchProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
