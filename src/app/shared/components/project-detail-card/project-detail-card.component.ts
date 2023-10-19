import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-project-detail-card',
  templateUrl: './project-detail-card.component.html',
  styleUrls: ['./project-detail-card.component.scss'],
})
export class ProjectDetailCardComponent {
  @Input() project: Project | null = null;
  @Input() loading: boolean = true;
}
