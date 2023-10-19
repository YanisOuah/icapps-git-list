import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectListComponent } from './project-list.component';
import { imports } from 'src/app/app.module';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { ProjectCardComponent } from 'src/app/shared/components/project-card/project-card.component';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: imports,
      declarations: [
        ProjectListComponent,
        SearchBarComponent,
        ProjectCardComponent,
      ],
    });
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(
      fixture.debugElement.nativeElement.querySelector('.card-title')
        .textContent
    ).toEqual('loading');
  });

  // it('should support ngModel for standalone fields', () => {
  //   let spy = spyOn(component, 'searchProjectsByName').and.callFake(() => {
  //     component.projects = [
  //       {
  //         id: 353279339,
  //         node_id: 'MDEwOlJlcG9zaXRvcnkzNTMyNzkzMzk=',
  //         name: 'flutter-icapps-architecture',
  //         full_name: 'icapps/flutter-icapps-architecture',
  //         private: false,
  //         owner: {
  //           login: 'icapps',
  //           id: 15049218,
  //           node_id: 'MDEyOk9yZ2FuaXphdGlvbjE1MDQ5MjE4',
  //           avatar_url: 'https://avatars.githubusercontent.com/u/15049218?v=4',
  //           gravatar_id: '',
  //           url: 'https://api.github.com/users/icapps',
  //           html_url: 'https://github.com/icapps',
  //           followers_url: 'https://api.github.com/users/icapps/followers',
  //           following_url:
  //             'https://api.github.com/users/icapps/following{/other_user}',
  //           gists_url: 'https://api.github.com/users/icapps/gists{/gist_id}',
  //           starred_url:
  //             'https://api.github.com/users/icapps/starred{/owner}{/repo}',
  //           subscriptions_url:
  //             'https://api.github.com/users/icapps/subscriptions',
  //           organizations_url: 'https://api.github.com/users/icapps/orgs',
  //           repos_url: 'https://api.github.com/users/icapps/repos',
  //           events_url: 'https://api.github.com/users/icapps/events{/privacy}',
  //           received_events_url:
  //             'https://api.github.com/users/icapps/received_events',
  //           type: 'Organization',
  //           site_admin: false,
  //         },
  //         html_url: 'https://github.com/icapps/flutter-icapps-architecture',
  //         description:
  //           'Architecture components used in icapps flutter projects',
  //         fork: false,
  //         url: 'https://api.github.com/repos/icapps/flutter-icapps-architecture',
  //         forks_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/forks',
  //         keys_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/keys{/key_id}',
  //         collaborators_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/collaborators{/collaborator}',
  //         teams_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/teams',
  //         hooks_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/hooks',
  //         issue_events_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/issues/events{/number}',
  //         events_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/events',
  //         assignees_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/assignees{/user}',
  //         branches_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/branches{/branch}',
  //         tags_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/tags',
  //         blobs_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/git/blobs{/sha}',
  //         git_tags_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/git/tags{/sha}',
  //         git_refs_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/git/refs{/sha}',
  //         trees_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/git/trees{/sha}',
  //         statuses_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/statuses/{sha}',
  //         languages_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/languages',
  //         stargazers_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/stargazers',
  //         contributors_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/contributors',
  //         subscribers_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/subscribers',
  //         subscription_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/subscription',
  //         commits_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/commits{/sha}',
  //         git_commits_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/git/commits{/sha}',
  //         comments_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/comments{/number}',
  //         issue_comment_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/issues/comments{/number}',
  //         contents_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/contents/{+path}',
  //         compare_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/compare/{base}...{head}',
  //         merges_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/merges',
  //         archive_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/{archive_format}{/ref}',
  //         downloads_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/downloads',
  //         issues_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/issues{/number}',
  //         pulls_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/pulls{/number}',
  //         milestones_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/milestones{/number}',
  //         notifications_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/notifications{?since,all,participating}',
  //         labels_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/labels{/name}',
  //         releases_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/releases{/id}',
  //         deployments_url:
  //           'https://api.github.com/repos/icapps/flutter-icapps-architecture/deployments',
  //         created_at: '2021-03-31T08:16:42Z',
  //         updated_at: '2023-09-23T16:37:34Z',
  //         pushed_at: '2023-10-16T14:48:10Z',
  //         git_url: 'git://github.com/icapps/flutter-icapps-architecture.git',
  //         ssh_url: 'git@github.com:icapps/flutter-icapps-architecture.git',
  //         clone_url:
  //           'https://github.com/icapps/flutter-icapps-architecture.git',
  //         svn_url: 'https://github.com/icapps/flutter-icapps-architecture',
  //         homepage: 'null',
  //         size: 506,
  //         stargazers_count: 8,
  //         watchers_count: 8,
  //         language: 'Dart',
  //         has_issues: true,
  //         has_projects: true,
  //         has_downloads: true,
  //         has_wiki: true,
  //         has_pages: false,
  //         has_discussions: false,
  //         forks_count: 2,
  //         mirror_url: 'null',
  //         archived: false,
  //         disabled: false,
  //         open_issues_count: 3,
  //         license: {
  //           key: 'mit',
  //           name: 'MIT License',
  //           spdx_id: 'MIT',
  //           url: 'https://api.github.com/licenses/mit',
  //           node_id: 'MDc6TGljZW5zZTEz',
  //         },
  //         allow_forking: true,
  //         is_template: false,
  //         web_commit_signoff_required: false,
  //         topics: [],
  //         visibility: 'public',
  //         forks: 2,
  //         open_issues: 3,
  //         watchers: 8,
  //         default_branch: 'main',
  //         score: 0,
  //       },
  //     ];
  //   });
  //   // const element: HTMLButtonElement =
  //   //   fixture.debugElement.nativeElement.querySelector('#searchButton');
  //   // element.click();
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     console.log(
  //       fixture.debugElement.nativeElement.querySelector('.card-title')
  //     );
  //   });
  //   // expect(
  //   // ).toContain('flutter-icapps-architecture');
  // });
});
