import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubListComponent } from './github-list.component';
import { imports } from 'src/app/app.module';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { ProjectCardComponent } from 'src/app/shared/components/project-card/project-card.component';

describe('GithubListComponent', () => {
  let component: GithubListComponent;
  let fixture: ComponentFixture<GithubListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: imports,
      declarations: [
        GithubListComponent,
        SearchBarComponent,
        ProjectCardComponent,
      ],
    });
    fixture = TestBed.createComponent(GithubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
