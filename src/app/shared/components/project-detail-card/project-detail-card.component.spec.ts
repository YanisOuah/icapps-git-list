import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailCardComponent } from './project-detail-card.component';
import { imports } from 'src/app/app.module';

describe('ProjectDetailCardComponent', () => {
  let component: ProjectDetailCardComponent;
  let fixture: ComponentFixture<ProjectDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: imports,

      declarations: [ProjectDetailCardComponent],
    });
    fixture = TestBed.createComponent(ProjectDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should display name and stars correctly', () => {
  //   fixture.detectChanges();
  //   const nameElement: HTMLParagraphElement =
  //     fixture.debugElement.nativeElement.querySelector('#projectCardTitle');
  //   const starsElement: HTMLParagraphElement =
  //     fixture.debugElement.nativeElement.querySelector('#projectCardStars');
  //   fixture.detectChanges();
  //   expect(nameElement.textContent).toEqual('testName');
  //   expect(starsElement.textContent).toContain('8');
  // });
});
