import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { imports } from 'src/app/app.module';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: imports });
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
