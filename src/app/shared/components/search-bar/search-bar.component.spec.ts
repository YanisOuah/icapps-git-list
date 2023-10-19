import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { imports } from 'src/app/app.module';
import { fakeAsync } from '@angular/core/testing';

describe('SearchBarComponent (minimal)', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: imports,
      declarations: [SearchBarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should change the input value after changing name value', fakeAsync(() => {
    const newValue = 'new value';
    const element: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#searchInput');
    component.name = newValue;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.value).toEqual(newValue);
    });
  }));

  it('should change the name value after changing input', fakeAsync(() => {
    const newValue = 'new value';
    const element: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#searchInput');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      element.value = newValue;
      element.dispatchEvent(new Event('input'));
      expect(component.name).toEqual(newValue);
    });
  }));

  it('should trigger #searchProjects after pressing search button', () => {
    let spy = spyOn(component, 'searchProjects').and.callFake(() => {});
    const element: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('#searchButton');
    element.click();
    expect(spy).toHaveBeenCalled();
  });
});
