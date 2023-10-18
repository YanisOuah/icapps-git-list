import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/Project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  projects: Project[] = [];
  loading: boolean = false;
  loadingArray: number[] = Array(30)
    .fill(1)
    .map((x, i) => i + 1);

  constructor(private projectService: ProjectService, private router: Router) {
    this.searchProjectsByName('icapps');
  }

  searchProjectsByName = (name: string) => {
    this.loading = true;
    this.projectService.getProjects(name).subscribe((data) => {
      this.projects = data;
      this.loading = false;
    });
  };

  openProjectDetails = (owner: string, repo: string) => {
    this.router.navigateByUrl(`/detail?ownerId=${owner}&repoId=${repo}`);
  };
}
