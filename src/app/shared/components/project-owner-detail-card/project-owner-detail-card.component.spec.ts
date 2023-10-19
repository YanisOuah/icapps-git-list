import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOwnerDetailCardComponent } from './project-owner-detail-card.component';

describe('ProjectOwnerDetailCardComponent', () => {
  let component: ProjectOwnerDetailCardComponent;
  let fixture: ComponentFixture<ProjectOwnerDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectOwnerDetailCardComponent]
    });
    fixture = TestBed.createComponent(ProjectOwnerDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
