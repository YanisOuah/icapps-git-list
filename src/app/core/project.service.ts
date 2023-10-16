import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../shared/models/Project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [];

  constructor(private httpClient: HttpClient) {}

  getProjects(name: string): Observable<Project[]> {
    return this.httpClient
      .get<any>(`https://api.github.com/search/repositories?q=${name}`)
      .pipe(map((data) => data.items));
  }
  getProject(owner: string, repo: string): Observable<Project> {
    return this.httpClient
      .get<any>(`https://api.github.com/repos/${owner}/${repo}`)
      .pipe(map((data) => data));
  }
}
