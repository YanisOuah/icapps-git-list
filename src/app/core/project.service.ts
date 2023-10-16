import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  API_KEY = 'secret';
  projects: Project[] = [];

  constructor(private httpClient: HttpClient) {}

  getProjects(name: string): Observable<Project[]> {
    return this.httpClient
      .get<any>(
        `https://api.github.com/search/repositories?q=${name}&apiKey=${this.API_KEY}`
      )
      .pipe(map((data) => data.items));
  }
}
