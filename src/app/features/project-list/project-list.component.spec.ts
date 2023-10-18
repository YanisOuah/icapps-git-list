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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
