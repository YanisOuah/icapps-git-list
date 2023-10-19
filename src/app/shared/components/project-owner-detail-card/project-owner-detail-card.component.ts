import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-owner-detail-card',
  templateUrl: './project-owner-detail-card.component.html',
  styleUrls: ['./project-owner-detail-card.component.scss'],
})
export class ProjectOwnerDetailCardComponent {
  @Input() name: string | undefined = '';
  @Input() imgUrl: string | undefined = '';
  @Input() loading: boolean = true;
}
