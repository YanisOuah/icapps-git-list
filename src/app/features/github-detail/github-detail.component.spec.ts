import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubDetailComponent } from './github-detail.component';
import { imports } from 'src/app/app.module';

describe('GithubDetailComponent', () => {
  let component: GithubDetailComponent;
  let fixture: ComponentFixture<GithubDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: imports,
      declarations: [GithubDetailComponent],
    });
    fixture = TestBed.createComponent(GithubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
