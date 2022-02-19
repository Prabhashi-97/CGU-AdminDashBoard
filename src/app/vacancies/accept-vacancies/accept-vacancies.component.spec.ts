import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptVacanciesComponent } from './accept-vacancies.component';

describe('AcceptVacanciesComponent', () => {
  let component: AcceptVacanciesComponent;
  let fixture: ComponentFixture<AcceptVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
