import { Component } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/models/Project';

@Component({
  selector: 'app-github-detail',
  templateUrl: './github-detail.component.html',
  styleUrls: ['./github-detail.component.scss'],
})
export class GithubDetailComponent {
  project: Project | null = null;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.projectService
        .getProject(params['ownerId'], params['repoId'])
        .subscribe((data) => {
          this.project = data;
          console.log(data);
        });
    });
  }
}
