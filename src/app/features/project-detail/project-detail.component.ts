import { Component } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/models/Project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent {
  project: Project | null = null;
  loading: boolean = true;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.projectService
        .getProject(params['ownerId'], params['repoId'])
        .subscribe((data) => {
          this.project = data;
          this.loading = false;
        });
    });
  }
}
