import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { imports } from 'src/app/app.module';
import { Project } from 'src/app/shared/models/Project';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: imports });
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('#getProjects should return array of projects', () => {
  //   service
  //     .getProjects('tetris')
  //     .subscribe((data) => expect(data.length).toBeGreaterThan(0));
  // });
  it('#getProjects with wrong parameters should return an error', () => {
    service
      .getProjects('')
      .subscribe((data) => expect(data.length).toBeGreaterThan(0));
  });
  // it('#getProject should return projects', () => {
  //   service.getProject('chvin', 'react-tetris').subscribe((data) => {
  //     expect(data).toBeDefined();
  //     expect(data.name).not.toBe('');
  //   });
  // });
});
