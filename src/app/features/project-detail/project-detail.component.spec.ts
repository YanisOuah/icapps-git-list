import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectDetailComponent } from './project-detail.component';
import { imports } from 'src/app/app.module';
import { ProjectOwnerDetailCardComponent } from 'src/app/shared/components/project-owner-detail-card/project-owner-detail-card.component';
import { ProjectDetailCardComponent } from 'src/app/shared/components/project-detail-card/project-detail-card.component';

describe('ProjectDetailComponent', () => {
  let component: ProjectDetailComponent;
  let fixture: ComponentFixture<ProjectDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: imports,
      declarations: [
        ProjectDetailComponent,
        ProjectOwnerDetailCardComponent,
        ProjectDetailCardComponent,
      ],
    });
    fixture = TestBed.createComponent(ProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
