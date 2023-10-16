import { Component } from '@angular/core';
import { ProjectService } from 'src/app/core/project.service';
import { Project } from 'src/app/shared/models/Project';

@Component({
  selector: 'app-github-list',
  templateUrl: './github-list.component.html',
  styleUrls: ['./github-list.component.scss'],
})
export class GithubListComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.searchProjectsByName('tetris');
  }

  searchProjectsByName = (name: string) => {
    this.projectService.getProjects(name).subscribe((data) => {
      console.log(123);
      this.projects = data;
      console.log(data);
    });
  };
}
