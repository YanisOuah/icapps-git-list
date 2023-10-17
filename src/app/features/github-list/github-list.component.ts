import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/core/project.service';
import { Project } from 'src/app/shared/models/Project';

@Component({
  selector: 'app-github-list',
  templateUrl: './github-list.component.html',
  styleUrls: ['./github-list.component.scss'],
})
export class GithubListComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) {
    this.searchProjectsByName('icapps');
  }

  searchProjectsByName = (name: string) => {
    this.projectService.getProjects(name).subscribe((data) => {
      this.projects = data;
      console.log(data);
    });
  };

  openProjectDetails = (owner: string, repo: string) => {
    this.router.navigateByUrl(`/detail?ownerId=${owner}&repoId=${repo}`);
  };
}
