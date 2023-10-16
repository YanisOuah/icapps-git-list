import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubDetailComponent } from './github-detail.component';

describe('GithubDetailComponent', () => {
  let component: GithubDetailComponent;
  let fixture: ComponentFixture<GithubDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubDetailComponent]
    });
    fixture = TestBed.createComponent(GithubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
