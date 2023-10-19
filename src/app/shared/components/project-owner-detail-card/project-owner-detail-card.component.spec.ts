import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOwnerDetailCardComponent } from './project-owner-detail-card.component';
import { imports } from 'src/app/app.module';

describe('ProjectOwnerDetailCardComponent', () => {
  let component: ProjectOwnerDetailCardComponent;
  let fixture: ComponentFixture<ProjectOwnerDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: imports,
      declarations: [ProjectOwnerDetailCardComponent],
    });
    fixture = TestBed.createComponent(ProjectOwnerDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
