import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';
import { imports } from 'src/app/app.module';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: imports,
      declarations: [ProjectCardComponent],
    });
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.name = 'testName';
    component.stars = 8;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display name and stars correctly', () => {
    const nameElement: HTMLParagraphElement =
      fixture.debugElement.nativeElement.querySelector('#projectCardTitle');
    const starsElement: HTMLParagraphElement =
      fixture.debugElement.nativeElement.querySelector('#projectCardStars');
    expect(nameElement.textContent).toEqual('testName');
    expect(starsElement.textContent).toContain('8');
  });
});
